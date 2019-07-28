const router = require('express').Router();
const queries = require('../config/queries');
const auth = require('../middlewares/auth');

router.get('/:username', auth, (req, res) => {
    queries.getUserInfo(req, res);
})

router.post('/', (req, res) => {
    queries.createNewUser(req, res);
})

router.post('/login', (req, res) => {
    queries.login(req, res);
})

router.post('/logout', (req, res) => {
    queries.logout(req, res);
})

router.patch('/changePassword', auth, (req, res) => {
    queries.changePassword(req, res);
})

router.delete('/', auth, (req, res) => {
    queries.deleteUser(req, res);
})

module.exports = router;