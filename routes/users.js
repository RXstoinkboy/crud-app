const router = require('express').Router();
// const hash = require('../config/hash');
const queries = require('../config/queries');

router.get('/:userID', (req, res) => {
    res.send(`Hello ${req.params.userID}`);
})

router.post('/', (req, res) => {
    queries.createNewUser(req, res);
    // res.send(req.body.username, req.body.password);
    // console.log(req.body.username);
    // res.send(`User ${req.body.username} was successfully created!`)
})

module.exports = router;