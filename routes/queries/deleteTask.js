const db = require('../../config/db');

const query = `
    DELETE FROM tasks
        WHERE id = $1
`;

const deleteTask = (req, res) => {
    return db.query(query, [req.params.taskID], (err, results) => {
        res.status(200).send(`Task with id: ${req.params.taskID} was deleted!`);
    })
};

module.exports = deleteTask;