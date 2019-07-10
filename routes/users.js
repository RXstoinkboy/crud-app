const router = require('express').Router();

router.get('/:userID', (req, res) => {
    res.send(`Hello ${req.params.userID}`);
})

module.exports = router;