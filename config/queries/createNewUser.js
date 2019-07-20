const db = require('../db');
const hash = require('../hash');

const query = `
    INSERT INTO users (username, hash_password, salt) 
        VALUES ($1,$2,$3)
`;

const doesUserExist = `
    SELECT (username) FROM users
        WHERE username = $1
`;

const createNewUser = (req, res) => {
    if (req.body.username === '' || req.body.password === ''){
        res.send(`Please provide correct username and password...`);
        return 
    } 

    db.query(doesUserExist, [req.body.username], (err, results) => {
        // if(results.rows[0].username === req.body.username){
        // if(!results.rows[0]){
        //     res.send(`Username ${req.body.username} is OK!`)
        // }
        // res.send(`Username ${req.body.username} has been already taken ... `);
        // res.send(results.rows);
        if(results.rows.length !== 0){
            res.send(`Username already taken`);
            return
        } 
        
        const passwordData = hash.hashPassword(req.body.password);
    
        return db.query(query, [req.body.username, passwordData.hash_password, passwordData.salt], (err, results) => {
            res.status(200).send(`User ${req.body.username} was successfully created!`)
        })
    })

    // const passwordData = hash.hashPassword(req.body.password);
    
    // return db.query(query, [req.body.username, passwordData.hash_password, passwordData.salt], (err, results) => {
    //     res.status(200).send(`User ${req.body.username} was successfully created!`)
    // })
};

module.exports = createNewUser;