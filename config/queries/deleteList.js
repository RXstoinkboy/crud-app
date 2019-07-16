const db = require('../db');

const query = `
    DELETE FROM lists
        WHERE id = $1
`;

const deleteList = (req, res) => {
    return db.query(query, [req.params.listID], (err, results) => {
        res.status(200).send(`List with id: ${req.params.listID} was deleted!`);
    })
};

module.exports = deleteList;