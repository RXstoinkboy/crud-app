const router = require('express').Router();

router.get('/', (req, res) => {
    res.send(`This will show you all available lists`)
})

module.exports = router;