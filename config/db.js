const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.USER,
    host: 'localhost',
    port: 5432,
    databese: process.env.DATABASE,
    password: process.env.PASSWORD
});