const db = require('../../config/db');

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

    return db.query(findUserQuery, [token], (err, results) => {
        const username = results.rows[0].username;
        
        return db.query(logoutQuery, [username], (err, results) => {
            
            res.clearCookie('login_token').redirect('/')
        })
    })
};

module.exports = logout;