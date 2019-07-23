const router = require('express').Router();
const queries = require('../config/queries');

router.get('/:username', (req, res) => {
    queries.getUserInfo(req, res);
})

router.post('/', (req, res) => {
    queries.createNewUser(req, res);
})

router.post('/login', (req, res) => {
    queries.login(req, res);
})

// HAVE TO GET MORE DATA FOR THAT LATER
// 1. CHANGE USER DATA ONLY IF USER IS LOGGED IN
// 2. COMPARE USER HASH PASSWORDS
// router.put('/', (req, res) => {
//     queries.changeUserData(req, res);
// })

module.exports = router;