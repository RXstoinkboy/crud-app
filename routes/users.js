const router = require('express').Router();
// const hash = require('../config/hash');
const queries = require('../config/queries');

router.get('/:userID', (req, res) => {
    res.send(`Hello ${req.params.userID}`);
})

router.post('/', (req, res) => {
    queries.createNewUser(req, res);
})

module.exports = router;