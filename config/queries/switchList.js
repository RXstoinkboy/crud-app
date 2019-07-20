const db = require('../db');

const query = `
    UPDATE tasks
        SET list_id = $2
        WHERE id = $1
`;

const switchList = (req, res) => {
    return db.query(query, [req.params.taskID, req.params.listID], (err, results) => {
        res.status(200).send(`Task with id: ${req.params.taskID} was moved to list: ${req.params.listID}`);
    })
};

module.exports = switchList;