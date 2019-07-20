const db = require('../db');
const queries = require('../queries');

const doesUserExist = `
    SELECT (username) FROM users
        WHERE username = $1
`;

const getUsername = (req, res) => {
    return db.query(query, [req.body.username], (err, results) => {
        // if(results.rows[0].username === req.body.username){
        // if(!results.rows[0]){
        //     res.send(`Username ${req.body.username} is OK!`)
        // }
        // res.send(`Username ${req.body.username} has been already taken ... `);
        // res.send(results.rows);
        if(results.rows.length !== 0) res.send(`username already taken`);
        
        queries.createNewUser(req, res);
    })
};

module.exports = getUsername;