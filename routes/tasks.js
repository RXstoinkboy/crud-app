const router = require('express').Router();

router.get('/:taskID', (req, res) => {
    const user = process.env.USER;
    res.send(`This is showing you what you have in task ${req.params.taskID} ${user}`);
});

module.exports = router;