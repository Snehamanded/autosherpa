 // seed.js
    const db = require('./db');
    const { createTables } = require('./models');

    // Wrap your existing seeding logic in an async function
    async function seedDatabase() {
        console.log("Starting database seeding...");
        await createTables(); // Ensure tables exist before seeding (good practice)

        try {
            // Insert Brands (Make)
            const brands = [
                { name: "Maruti Suzuki", logoUrl: "https://placehold.co/100x50/FF0000/FFFFFF?text=Maruti" },
                { name: "Hyundai", logoUrl: "https://placehold.co/100x50/0000FF/FFFFFF?text=Hyundai" },
                { name: "Tata Motors", logoUrl: "https://placehold.co/100x50/00FF00/FFFFFF?text=Tata" },
                { name: "Mahindra", logoUrl: "https://placehold.co/100x50/FFFF00/000000?text=Mahindra" },
                { name: "Toyota", logoUrl: "https://placehold.co/100x50/FFA500/FFFFFF?text=Toyota" }
            ];

            for (const brand of brands) {
                const res = await db.query(
                    `INSERT INTO brands (brand_name, brand_logo_url)
                     VALUES ($1, $2)
                     ON CONFLICT (brand_name) DO NOTHING
                     RETURNING brand_id;`,
                    [brand.name, brand.logoUrl]
                );
                if (res.rows.length > 0) {
                    console.log(`Inserted brand: ${brand.name} with ID: ${res.rows[0].brand_id}`);
                } else {
                    console.log(`Brand already exists: ${brand.name}`);
                }
            }

            // Fetch brand IDs for car insertion
            const brandMap = {};
            const brandRes = await db.query('SELECT brand_id, brand_name FROM brands;');
            brandRes.rows.forEach(row => {
                brandMap[row.brand_name] = row.brand_id;
            });

            // Insert Cars (with detailed columns)
            const cars = [
                {
                    serial_number: "C001", make: "Maruti Suzuki", model: "Swift Dzire", variant: "VXI", color: "White",
                    fuel_type: "Petrol", registration_number: "KA01AB1234", registration_date: "2018-05-15", rc_status: "Active",
                    rc_expiry_date: "2033-05-15", chassis_number: "CHAS001", engine_number: "ENG001", manufacturing_year: 2018,
                    manufacturing_month: "May", owner_serial_number: 1, mileage_km: 60000, cubic_capacity_cc: 1197,
                    emission_norms: "BS4", transmission_type: "Manual", vehicle_category: "Sedan", insurance_type: "Comprehensive",
                    insurance_expiry_date: "2025-08-01", estimated_selling_price: 4.50, ready_for_sales: true,
                    image_url: "https://placehold.co/400x200/FF0000/FFFFFF?text=Swift+Dzire+C001"
                },
                {
                    serial_number: "C002", make: "Hyundai", model: "Creta", variant: "SX", color: "Silver",
                    fuel_type: "Diesel", registration_number: "DL05CD5678", registration_date: "2019-11-20", rc_status: "Active",
                    rc_expiry_date: "2034-11-20", chassis_number: "CHAS002", engine_number: "ENG002", manufacturing_year: 2019,
                    manufacturing_month: "November", owner_serial_number: 2, mileage_km: 45000, cubic_capacity_cc: 1493,
                    emission_norms: "BS6", transmission_type: "Manual", vehicle_category: "SUV", insurance_type: "Third Party",
                    insurance_expiry_date: "2025-10-01", estimated_selling_price: 9.80, ready_for_sales: true,
                    image_url: "https://placehold.co/400x200/0000FF/FFFFFF?text=Creta+C002"
                },
                {
                    serial_number: "C003", make: "Maruti Suzuki", model: "Baleno", variant: "Zeta", color: "Blue",
                    fuel_type: "Petrol", registration_number: "MH12EF9012", registration_date: "2020-03-10", rc_status: "Active",
                    rc_expiry_date: "2035-03-10", chassis_number: "CHAS003", engine_number: "ENG003", manufacturing_year: 2020,
                    manufacturing_month: "March", owner_serial_number: 1, mileage_km: 30000, cubic_capacity_cc: 1197,
                    emission_norms: "BS6", transmission_type: "Automatic", vehicle_category: "Hatchback", insurance_type: "Comprehensive",
                    insurance_expiry_date: "2026-02-01", estimated_selling_price: 7.20, ready_for_sales: true,
                    image_url: "https://placehold.co/400x200/00FF00/FFFFFF?text=Baleno+C003"
                },
                {
                    serial_number: "C004", make: "Tata Motors", model: "Nexon", variant: "XZ+", color: "Red",
                    fuel_type: "Petrol", registration_number: "UP16GH3456", registration_date: "2022-01-25", rc_status: "Active",
                    rc_expiry_date: "2037-01-25", chassis_number: "CHAS004", engine_number: "ENG004", manufacturing_year: 2022,
                    manufacturing_month: "January", owner_serial_number: 1, mileage_km: 15000, cubic_capacity_cc: 1199,
                    emission_norms: "BS6", transmission_type: "Manual", vehicle_category: "Compact SUV", insurance_type: "Comprehensive",
                    insurance_expiry_date: "2026-12-01", estimated_selling_price: 11.50, ready_for_sales: true,
                    image_url: "https://placehold.co/400x200/FF00FF/FFFFFF?text=Nexon+C004"
                },
                {
                    serial_number: "C005", make: "Hyundai", model: "i20", variant: "Sportz", color: "Grey",
                    fuel_type: "Petrol", registration_number: "TN07IJ7890", registration_date: "2021-09-01", rc_status: "Active",
                    rc_expiry_date: "2036-09-01", chassis_number: "CHAS005", engine_number: "ENG005", manufacturing_year: 2021,
                    manufacturing_month: "September", owner_serial_number: 1, mileage_km: 20000, cubic_capacity_cc: 1197,
                    emission_norms: "BS6", transmission_type: "Automatic", vehicle_category: "Hatchback", insurance_type: "Comprehensive",
                    insurance_expiry_date: "2026-08-01", estimated_selling_price: 6.00, ready_for_sales: true,
                    image_url: "https://placehold.co/400x200/FFFF00/000000?text=i20+C005"
                },
                {
                    serial_number: "C006", make: "Maruti Suzuki", model: "Ertiga", variant: "VXI", color: "White",
                    fuel_type: "Petrol", registration_number: "GJ06KL2345", registration_date: "2019-07-01", rc_status: "Active",
                    rc_expiry_date: "2034-07-01", chassis_number: "CHAS006", engine_number: "ENG006", manufacturing_year: 2019,
                    manufacturing_month: "July", owner_serial_number: 1, mileage_km: 70000, cubic_capacity_cc: 1462,
                    emission_norms: "BS4", transmission_type: "Manual", vehicle_category: "MPV", insurance_type: "Comprehensive",
                    insurance_expiry_date: "2025-09-01", estimated_selling_price: 6.80, ready_for_sales: true,
                    image_url: "https://placehold.co/400x200/00FFFF/000000?text=Ertiga+C006"
                },
                {
                    serial_number: "C007", make: "Hyundai", model: "Venue", variant: "S", color: "Blue",
                    fuel_type: "Petrol", registration_number: "KA02MN6789", registration_date: "2020-02-14", rc_status: "Active",
                    rc_expiry_date: "2035-02-14", chassis_number: "CHAS007", engine_number: "ENG007", manufacturing_year: 2020,
                    manufacturing_month: "February", owner_serial_number: 1, mileage_km: 25000, cubic_capacity_cc: 1197,
                    emission_norms: "BS6", transmission_type: "Automatic", vehicle_category: "Compact SUV", insurance_type: "Comprehensive",
                    insurance_expiry_date: "2026-01-01", estimated_selling_price: 8.50, ready_for_sales: true,
                    image_url: "https://placehold.co/400x200/800080/FFFFFF?text=Venue+C007"
                },
                {
                    serial_number: "C008", make: "Tata Motors", model: "Tiago", variant: "XT", color: "White",
                    fuel_type: "Petrol", registration_number: "DL01OP1234", registration_date: "2021-04-01", rc_status: "Active",
                    rc_expiry_date: "2036-04-01", chassis_number: "CHAS008", engine_number: "ENG008", manufacturing_year: 2021,
                    manufacturing_month: "April", owner_serial_number: 1, mileage_km: 35000, cubic_capacity_cc: 1199,
                    emission_norms: "BS6", transmission_type: "Manual", vehicle_category: "Hatchback", insurance_type: "Third Party",
                    insurance_expiry_date: "2026-03-01", estimated_selling_price: 4.20, ready_for_sales: true,
                    image_url: "https://placehold.co/400x200/FFA500/FFFFFF?text=Tiago+C008"
                }
            ];

            for (const car of cars) {
                const brandId = brandMap[car.make];
                if (!brandId) {
                    console.warn(`Skipping car ${car.serial_number}: Brand '${car.make}' not found.`);
                    continue;
                }
                await db.query(
                    `INSERT INTO cars (
                        serial_number, brand_id, model, variant, color, fuel_type,
                        registration_number, registration_date, rc_status, rc_expiry_date,
                        chassis_number, engine_number, manufacturing_year, manufacturing_month,
                        owner_serial_number, mileage_km, cubic_capacity_cc, emission_norms,
                        transmission_type, vehicle_category, insurance_type, insurance_expiry_date,
                        estimated_selling_price, ready_for_sales, image_url
                    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25)
                    ON CONFLICT (serial_number) DO NOTHING;`,
                    [
                        car.serial_number, brandId, car.model, car.variant, car.color, car.fuel_type,
                        car.registration_number, car.registration_date, car.rc_status, car.rc_expiry_date,
                        car.chassis_number, car.engine_number, car.manufacturing_year, car.manufacturing_month,
                        car.owner_serial_number, car.mileage_km, car.cubic_capacity_cc, car.emission_norms,
                        car.transmission_type, car.vehicle_category, car.insurance_type, car.insurance_expiry_date,
                        car.estimated_selling_price, car.ready_for_sales, car.image_url
                    ]
                );
                console.log(`Inserted car: ${car.model} (${car.serial_number})`);
            }

            console.log("Database seeding complete!");
        } catch (error) {
            console.error("Error seeding database:", error);
        } finally {
            // Do NOT close the pool here if this function is called from a web service,
            // as it will prevent subsequent API calls.
            // db.pool.end(); // ONLY call this if seed.js is run as a standalone script
        }
    }

    // Export the function so app.js can import and call it
    module.exports = {
        seedDatabase
    };
    