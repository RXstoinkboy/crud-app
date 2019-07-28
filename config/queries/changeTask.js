const db = require('../db');

const query = `
    UPDATE tasks
        SET task = $2
        WHERE id = $1
`;

const changeTask = (req, res) => {
    return db.query(query, [req.params.taskID, req.body.new_task_name], (err, results) => {
        res.status(200).send(`Task with id: ${req.params.taskID} was updated to ${req.params.taskUpdate}`);
    })
};

module.exports = changeTask;