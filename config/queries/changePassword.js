const db = require('../db');
const {createHashedPassword, hashPassword} = require('../../config/hash');

const changePasswordQuery = `
    UPDATE users
        SET hash_password = $2,
        SET salt = $3
            WHERE username = $1
`;

const verifyPassword = `
    SELECT * FROM users
        WHERE username = $1
`;

// 1. check if user is logged in
// 2. change data only if hash password provided matches one in DB 

const changePassword = (req, res) => {
    const passwordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}');

    db.query(verifyPassword, [req.body.username], (err, results) => {
        // hash and salt from DB
        const {hash_password: old_hash_password, salt: old_salt} = results.rows[0];
        // hash generated based on provided password and salt from DB
        const verification_password = createHashedPassword(req.body.password, old_salt);
        
        if(!passwordRegex.test(req.body.new_password)) return res.status(403).send(`New password is in the wrong format.`);
        // compare verification hash to old hash from DB & check if new password is in the right format
        if((verification_password.hash_password === old_hash_password) && passwordRegex.test(req.body.new_password)){
            // generate new hash and new salt based on new provided password
            const {hash_password, salt} = hashPassword(req.body.new_password);

            // console.log(req.body.new_password, salt, hash_password);

            return db.query(changePasswordQuery, [req.body.username, hash_password, salt], (error, response) => {
                console.log(req.body.username, hash_password, salt);
                res.status(200).send(`Password successfully updated.`)
            })
        } else {
            return res.status(403).send(`Sorry, provided password was incorrect.`)
        }


        
    })
};

module.exports = changePassword;