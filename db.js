// db.js
const { Pool } = require('pg');
const config = require('./config');

// Create a PostgreSQL connection pool
const pool = new Pool({
    connectionString: config.databaseUrl,
    ssl: {
            rejectUnauthorized: false
        }
});

// Function to execute database queries
async function query(text, params) {
    const client = await pool.connect();
    try {
        const res = await client.query(text, params);
        return res;
    } finally {
        client.release(); // Release the client back to the pool
    }
}

module.exports = {
    query,
    pool 
};