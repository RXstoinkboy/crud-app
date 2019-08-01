const db = require('../../config/db');
const createHashedPassword = require('../../config/hash').createHashedPassword;
const jwt = require('jsonwebtoken');

const getUserInfo = `
    SELECT * FROM users
        WHERE username = $1
`;

const assignToken = `
    UPDATE users
        SET token = $1
            WHERE username = $2
`;

const login = (req, res) => {
    // get userdata
    return db.query(getUserInfo, [req.body.username], (err, results) => {

        if (err) return res.json(err);

        // stop proceeding further if user was not found
        if (results.rows.length === 0) return res.send('User not found');

        const hash = createHashedPassword(req.body.password, results.rows[0].salt);
        // get salt and hash_password from database
        // hash password provided by user and compare result with data stored in DB
        if (
            hash.hash_password === results.rows[0].hash_password 
            && req.body.username === results.rows[0].username){

            // create a token
            const token = jwt.sign(results.rows[0], process.env.JWT_SECRET);
            
            // save token in DB
            db.query(assignToken, [token, req.body.username], (err, resp) => {
                res.cookie('login_token', token).send('Successfully logged in');
                // I think I can also show some nice website :D
            })

        } else {
            res.send('Invalid data')
        }
    });
};

module.exports = login;
