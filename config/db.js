const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DB_URL
});

pool.on('connect', ()=> console.log(`db connected`));

module.exports = pool;