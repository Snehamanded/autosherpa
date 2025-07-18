// app.js
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const db = require('./db');
const { createTables } = require('./models'); // Still needed for /create_tables endpoint

const app = express();
const port = process.env.PORT || 3000; // Render will provide the PORT environment variable

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// API Key Authentication Middleware
function requireApiKey(req, res, next) {
    const apiKey = req.headers['x-api-key']; // Expecting 'X-Api-Key' header
    if (!apiKey || apiKey !== config.aisensyBackendApiKey) {
        return res.status(401).json({ error: "Unauthorized: Invalid API Key" });
    }
    next(); // Continue to the next middleware/route handler
}

// --- Database Initialization Endpoint ---
// This endpoint should be hit once to create tables after initial deployment.
// It's kept here for convenience but is typically not used in daily operations.
app.get('/create_tables', async (req, res) => {
    try {
        await createTables();
        res.status(200).json({ message: "Tables created successfully!" });
    } catch (error) {
        console.error("Error in /create_tables:", error);
        res.status(500).json({ error: `Failed to create tables: ${error.message}` });
    }
});

// --- API Endpoints ---

// GET /brands: Retrieves a list of all car brands
app.get('/brands', requireApiKey, async (req, res) => {
    try {
        const result = await db.query('SELECT brand_id, brand_name, brand_logo_url FROM brands;');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Error fetching brands:", error);
        res.status(500).json({ error: "Failed to fetch brands" });
    }
});

// GET /cars: Retrieves a list of cars based on budget, optional brand, and pagination
app.get('/cars', requireApiKey, async (req, res) => {
    try {
        const { budget_range, brand_id, offset = 0, limit = 5 } = req.query;

        if (!budget_range) {
            return res.status(400).json({ error: "budget_range parameter is required" });
        }

        let minPrice, maxPrice;
        switch (budget_range) {
            case "0-5":
                minPrice = 0;
                maxPrice = 5.0;
                break;
            case "5-10":
                minPrice = 5.0;
                maxPrice = 10.0;
                break;
            case "10-15":
                minPrice = 10.0;
                maxPrice = 15.0;
                break;
            case "15-20":
                minPrice = 15.0;
                maxPrice = 20.0;
                break;
            case "above-20":
                minPrice = 20.0;
                maxPrice = 9999999.99; // Effectively infinity
                break;
            default:
                return res.status(400).json({ error: "Invalid budget_range provided" });
        }

        let queryText = `
            SELECT car_id, serial_number, model, manufacturing_year as year, mileage_km as mileage,
                   estimated_selling_price as price, image_url, fuel_type,
                   transmission_type, owner_serial_number as num_owners, ready_for_sales as is_available
            FROM cars
            WHERE estimated_selling_price >= $1 AND estimated_selling_price < $2 AND ready_for_sales = TRUE
        `;
        const queryParams = [minPrice, maxPrice];
        let paramIndex = 3; // $1 and $2 are already used

        if (brand_id && brand_id.toLowerCase() !== 'none') {
            const brandIdNum = parseInt(brand_id);
            if (isNaN(brandIdNum)) {
                return res.status(400).json({ error: "Invalid brand_id format" });
            }
            queryText += ` AND brand_id = $${paramIndex}`;
            queryParams.push(brandIdNum);
            paramIndex++;
        }

        queryText += ` OFFSET $${paramIndex} LIMIT $${paramIndex + 1};`;
        queryParams.push(offset, limit);

        const result = await db.query(queryText, queryParams);

        if (result.rows.length === 0) {
            return res.status(200).json({ message: "No cars found matching your criteria." });
        }

        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Error fetching cars:", error);
        res.status(500).json({ error: "Failed to fetch cars" });
    }
});

// POST /test_drives: Creates a new test drive booking
app.post('/test_drives', requireApiKey, async (req, res) => {
    try {
        const {
            car_id, user_name, user_phone_number, has_dl,
            preferred_date, preferred_time, pickup_option, user_location_details
        } = req.body;

        // Fetch car model name for storage in test_drives (optional, but requested by schema)
        let carModelName = null;
        if (car_id) {
            const carResult = await db.query('SELECT model FROM cars WHERE car_id = $1;', [car_id]);
            if (carResult.rows.length > 0) {
                carModelName = carResult.rows[0].model;
            }
        }

        // Basic validation
        if (!car_id || !user_name || !user_phone_number || !preferred_date || !preferred_time || !pickup_option) {
            return res.status(400).json({ error: "Missing required fields for test drive booking." });
        }

        // Validate date format (YYYY-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(preferred_date)) {
            return res.status(400).json({ error: "Invalid date format for preferred_date. Use YYYY-MM-DD (e.g., 2025-07-20)" });
        }

        const result = await db.query(
            `INSERT INTO test_drives (
                car_id, user_name, phone, has_dl, preferred_date, preferred_time,
                pickup_option, user_location_details, booking_status, executive_assigned, car_model_name
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            RETURNING id, booking_status;`,
            [
                car_id, user_name, user_phone_number, has_dl, preferred_date, preferred_time,
                pickup_option, user_location_details, "Pending", "Suresh", carModelName
            ]
        );

        const newBooking = result.rows[0];
        res.status(201).json({
            message: "Test drive booked successfully!",
            booking_id: newBooking.id,
            status: newBooking.booking_status
        });
    } catch (error) {
        console.error("Error creating test drive:", error);
        res.status(500).json({ error: `Failed to book test drive: ${error.message}` });
    }
});

// Start the server for local development or Render deployment
app.listen(port, () => {
    console.log(`AutoSherpa backend listening at http://localhost:${port}`);
    console.log(`Database URI: ${config.databaseUrl}`);
    console.log(`Backend API Key (first 5 chars): ${config.aisensyBackendApiKey.substring(0, 5)}...`);
    // The createTables() call on app start is commented out for production best practices.
    // createTables().catch(err => console.error("Error during startup table creation:", err));
});
