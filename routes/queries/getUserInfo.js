const db = require('../../config/db');

const query = `
    SELECT * FROM users
        WHERE username = $1
`;

const getUserInfo = (req, res) => {
    return db.query(query, [req.params.username], (err, results) => {
        res.status(200).json(results.rows);
    })
};

module.exports = getUserInfo;