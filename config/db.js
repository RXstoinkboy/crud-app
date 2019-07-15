const { Pool } = require('pg');
const pool = new Pool({
    connectionString: 'postgres://eryk:rxpostgres@localhost:5432/crud_app'
});

pool.on('connect', ()=> console.log(`db connected`));

module.exports = pool;