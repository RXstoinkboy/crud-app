const db = require('../db');
const hash = require('../hash');

const query = `
    INSERT INTO users (username, hash_password, salt) VALUES ($1,$2,$3)
`;

const createNewUser = (req, res) => {
    const passwordData = hash.hashPassword(req.body.password);
    return db.query(query, [req.body.username, passwordData.hash_password, passwordData.salt], (err, results) => {
        res.status(200).send(`User ${req.body.username} was successfully created!`)
    })
};

module.exports = createNewUser;