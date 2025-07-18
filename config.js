// config.js
require('dotenv').config(); // Load environment variables

const config = {
    // Database URL for PostgreSQL connection
    // Example: "postgresql://user:password@host:port/database_name"
    databaseUrl: process.env.DATABASE_URL || "postgresql://user:password@localhost:5432/autosherpa_db",

    // API Key to secure your backend. AiSensy will send this key in its API calls.
    // IMPORTANT: Generate a strong, unique key for production!
    aisensyBackendApiKey: process.env.AISENSY_BACKEND_API_KEY || "your_strong_default_secret_key_if_not_set"
};

module.exports = config;