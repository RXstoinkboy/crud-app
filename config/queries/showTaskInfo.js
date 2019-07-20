const db = require('../db');

const query = `
    SELECT * FROM tasks
        WHERE id = $1
`;

const showTaskInfo = (req, res) => {
    return db.query(query, [req.params.taskID], (err, results) => {
        res.status(200).json(results.rows);
    })
};

module.exports = showTaskInfo;