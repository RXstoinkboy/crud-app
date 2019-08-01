const db = require('../../config/db');

const query = `
    INSERT INTO tasks(user_id, list_id, task)
        VALUES ($1, $2, $3)
`

const createNewTask = (req, res) => {
    return db.query(query, [req.params.userID, req.params.listID, req.body.task], (err, results) => {
        res.status(200).send(`Task: ${req.params.task} succesfully created !`);
    })
};

module.exports = createNewTask;