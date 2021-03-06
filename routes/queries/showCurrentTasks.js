const db = require('../../config/db');

const query = `
        SELECT * FROM tasks
            WHERE list_id = $1 AND user_id = $2
    `;
const showCurrentTasks = (req, res) => {
    return db.query(query, [req.params.listID], (err,results) => {
        res.status(200).json(results.rows);
    })
}


module.exports = showCurrentTasks;