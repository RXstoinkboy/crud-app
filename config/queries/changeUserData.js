const db = require('../db');

const queryChangeData = `
    UPDATE users
        SET username = $1,
        SET password = $2
            WHERE username = $1
`;

// 1. check if user is logged in
// 2. change data only if hash password provided matches one in DB 

const changeUserData = (req, res) => {
    const passwordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}');
    const userRegex = new RegExp('(?=[A-Za-z0-9]).{3,}');

    if (!userRegex.test(req.body.username) || !passwordRegex.test(req.body.password)){
        res.send(`Username or password was not correct...`);
        return 
    }

    return db.query(queryChangeData, [req.body.username, req.body.password], (err, results) => {
        res.status(200).send(`User info for user ${req.body.username} was succefully updated!`)
    })
};

module.exports = changeUserData;