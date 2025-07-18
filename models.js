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

        // Cars table (detailed structure based on your CSV columns)
        await db.query(`
            CREATE TABLE IF NOT EXISTS cars (
                car_id SERIAL PRIMARY KEY,
                "SerialNumber" VARCHAR(255) UNIQUE,
                "Make" VARCHAR(255) NOT NULL, -- This will be mapped to brand_id in future
                "Model" VARCHAR(255) NOT NULL,
                "Variant" VARCHAR(255),
                "Color" VARCHAR(255),
                "FuelType" VARCHAR(50),
                "RegistrationNumber" VARCHAR(255),
                "RegistrationDate" DATE,
                "RCStatus" VARCHAR(50),
                "RCExpiryDate" DATE,
                "ChassisNumber" VARCHAR(255),
                "EngineNumber" VARCHAR(255),
                "ManufacturingYear" INTEGER,
                "ManufacturingMonth" VARCHAR(50),
                "OwnerSerialNumber" INTEGER,
                "MileageKM" INTEGER,
                "CubicCapacityCC" INTEGER,
                "EmissionNorms" VARCHAR(100),
                "TransmissionType" VARCHAR(50),
                "VehicleCategory" VARCHAR(100),
                "InsuranceType" VARCHAR(100),
                "InsuranceExpiryDate" DATE,
                "EstimatedSellingPrice" NUMERIC(10, 2) NOT NULL,
                "ReadyforSales" BOOLEAN DEFAULT TRUE,
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