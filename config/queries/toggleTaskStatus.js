const db = require('../db');

const query = `
    UPDATE tasks
        SET active = NOT active
        WHERE id = $1;
`;

const toggleTaskStatus = (req, res) => {
    return db.query(query, [req.params.taskID], (err, results) => {
        res.status(200).send(`Status was changed for task ${req.params.taskID}`)
    })
};

module.exports = toggleTaskStatus;