const db = require('../../config/db');
const hash = require('../../config/hash');

const query = `
    INSERT INTO users (username, hash_password, salt) 
        VALUES ($1,$2,$3)
`;

const doesUserExist = `
    SELECT (username) FROM users
        WHERE username = $1
`;

const createNewUser = (req, res) => {
    const passwordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}');
    const userRegex = new RegExp('(?=[A-Za-z0-9]).{3,}');

    if (!userRegex.test(req.body.username) || !passwordRegex.test(req.body.password)){
        res.status(400).send(`Please provide correct username and password...`);
        return 
    } 

    db.query(doesUserExist, [req.body.username], (err, results) => {
        if(results.rows.length !== 0){
            res.send(`Username already taken`);
            return
        } 
        
        const passwordData = hash.hashPassword(req.body.password);
    
        // create new user only if there is USERNAME and PASSWORD provided 
        // and if USERNAME has not been taken already
        return db.query(query, [req.body.username, passwordData.hash_password, passwordData.salt], (err, results) => {
            res.status(200).send(`User ${req.body.username} was successfully created!`)
            // maybe it should redirect to LOGIN?
        })
    })
};

module.exports = createNewUser;