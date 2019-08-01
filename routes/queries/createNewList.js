const db = require('../../config/db');

const query = `
    INSERT INTO lists(list_name, user_id)
        VALUES ($2, $1)
`

const createNewList = (req, res) => {
    return db.query(query, [req.params.userID, req.params.listName], (err,results) => {
        res.status(200).send(`New list ${req.params.listName} succesfully created`)
    })
}

module.exports = createNewList;