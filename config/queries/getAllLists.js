const db = require('../db');

const query = `
        SELECT * FROM lists
        WHERE user_id = $1;
    `;
const getAllLists = (req, res) => {
    return db.query(query, [req.params.userID], (err,results) => {
        res.status(200).json(results.rows);
    })
}


module.exports = getAllLists;