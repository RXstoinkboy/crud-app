const db = require('../../config/db');
const {createHashedPassword, hashPassword} = require('../../config/hash');

const changePasswordQuery = `
    UPDATE users
        SET hash_password = $2,
            salt = $3
                WHERE username = $1
`;

const getUserInfo = `
    SELECT * FROM users
        WHERE username = $1
`;

// 1. check if user is logged in
// 2. change data only if hash password provided matches one in DB 

const changePassword = (req, res) => {
    const passwordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}');
    
    return db.query(getUserInfo, [req.body.username], (userErr, user) => {
        if(userErr) return res.json(userErr);
        // get hash and salt from database for a tested user
        const {hash_password: hashFromDB, salt: saltFromDB} = user.rows[0];

        // take salt from DB and use it to create a hashed password for data verification
        const {hash_password: hashToVerify, salt} = createHashedPassword(req.body.password, saltFromDB);
        
        // if provided password matches the one which is in db then update data
        if(hashFromDB === hashToVerify){
            // if new password matches regex then update data
            if(passwordRegex.test(req.body.new_password)){
                const {hash_password: newHashPassword, salt: newSalt} = hashPassword(req.body.new_password);
                console.log(`new password: ${req.body.new_password}, new hash: ${newHashPassword}, new salt: ${newSalt}`);
                
                return db.query(changePasswordQuery, [req.body.username, newHashPassword, newSalt], (updateErr, updateRes) => {
                    if(updateErr){
                        return res.json(updateErr);
                    } else {
                        console.log(`password updated`);
                        return res.json(updateRes);
                    }
                })
                // res.json(`Password updated successfully!`);
            // if new password didn't match regex then request for correct format
            } else {
                res.json(
                    {
                        message:`New password was in wrong format`, 
                        format: `Password has to contain 6 or more characters, one or more capital letters, one or more numbers, one or more lowercase latters...`
                    });
            }
            // res.json({hashToVerify, hashFromDB, saltFromDB});
        } else {
            console.log(`hashFromDB: ${hashFromDB}, hashToVerify: ${hashToVerify}, saltFromDB: ${saltFromDB}`);
            return res.json(`Sorry, provided password is incorrect...`)
        }
    })
};

module.exports = changePassword;