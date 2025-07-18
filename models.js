   const db = require('./db');

    // Function to create all necessary tables
    async function createTables() {
        try {
            // Brands table (corresponds to 'Make' in your car data)
            await db.query(`
                CREATE TABLE IF NOT EXISTS brands (
                    brand_id SERIAL PRIMARY KEY,
                    brand_name VARCHAR(255) UNIQUE NOT NULL,
                    brand_logo_url VARCHAR(255)
                );
            `);
            console.log("Table 'brands' created or already exists.");

            // Cars table (detailed structure based on your screenshot - REMOVED 'description' and 'location')
            await db.query(`
                CREATE TABLE IF NOT EXISTS cars (
                    car_id SERIAL PRIMARY KEY,
                    serial_number VARCHAR(255) UNIQUE, -- Added based on screenshot
                    brand_id INTEGER NOT NULL REFERENCES brands(brand_id),
                    model VARCHAR(255) NOT NULL,
                    variant VARCHAR(255),
                    color VARCHAR(255),
                    fuel_type VARCHAR(50),
                    registration_number VARCHAR(255),
                    registration_date DATE,
                    rc_status VARCHAR(50),
                    rc_expiry_date DATE,
                    chassis_number VARCHAR(255),
                    engine_number VARCHAR(255),
                    manufacturing_year INTEGER NOT NULL,
                    manufacturing_month VARCHAR(50),
                    owner_serial_number INTEGER,
                    mileage_km INTEGER,
                    cubic_capacity_cc INTEGER,
                    emission_norms VARCHAR(100),
                    transmission_type VARCHAR(50),
                    vehicle_category VARCHAR(100),
                    insurance_type VARCHAR(100),
                    insurance_expiry_date DATE,
                    estimated_selling_price NUMERIC(10, 2) NOT NULL, -- Corresponds to 'price'
                    ready_for_sales BOOLEAN DEFAULT TRUE, -- Corresponds to 'is_available'
                    image_url VARCHAR(255), -- Publicly accessible URL for car image
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                );
            `);
            console.log("Table 'cars' created or already exists.");

            // Test Drives table (aligned with your screenshot and expanded for bot needs)
            await db.query(`
                CREATE TABLE IF NOT EXISTS test_drives (
                    id SERIAL PRIMARY KEY,
                    user_name VARCHAR(255) NOT NULL,
                    phone VARCHAR(50) NOT NULL,
                    preferred_date DATE NOT NULL,
                    car_id INTEGER REFERENCES cars(car_id), -- Foreign key to cars table
                    car_model_name VARCHAR(255), -- Storing model name for direct reference, optional
                    has_dl BOOLEAN,
                    preferred_time VARCHAR(50),
                    pickup_option VARCHAR(255),
                    user_location_details TEXT,
                    booking_status VARCHAR(50) DEFAULT 'Pending',
                    executive_assigned VARCHAR(255),
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                );
            `);
            console.log("Table 'test_drives' created or already exists.");

        } catch (error) {
            console.error("Error creating tables:", error);
            process.exit(1); // Exit if table creation fails
        }
    }

    module.exports = {
        createTables
    };