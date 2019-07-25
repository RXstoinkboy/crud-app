const db = require('../db');

const logoutQuery = `
    UPDATE users
        SET token = null
        WHERE username = $1
`;

const findUserQuery = `
    SELECT * FROM users
        WHERE token = $1
`

const logout = (req, res) => {
    const token = req.cookies.login_token;

    if(!token) return res.redirect('/');

    return db.query(findUserQuery, [token], (err, results) => {
        const userID = results.rows[0].id;
        
        return db.query(logoutQuery, [userID], (err, results) => {
            
            res.clearCookie('login_token').redirect('/')
        })
    })
};

module.exports = logout;