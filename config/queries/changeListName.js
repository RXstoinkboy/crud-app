const db = require('../db');

const query = `
    UPDATE lists
        SET list_name = $3
        WHERE id = $2 AND user_id = $1
`

const changeListName = (req, res) => {
    return db.query(query, [req.params.userID, req.params.listID, req.body.new_name], (err, results) => {
        res.status(200).send(`List with ID: ${req.params.listID} was renamed to ${req.params.newName}`)
    })
};

module.exports = changeListName;