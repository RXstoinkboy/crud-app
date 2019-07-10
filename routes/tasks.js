const router = require('express').Router();

router.get('/:taskID', (req, res) => {
    res.send(`This is showing you what you have in task ${req.params.taskID}`);
});

module.exports = router;