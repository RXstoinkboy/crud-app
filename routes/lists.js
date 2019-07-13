const router = require('express').Router();
const queries = require('../config/queries');

const pool = require('../config/db');

router.get('/:userID', (req, res) => {
    queries.getAllLists(req, res);
})

module.exports = router;