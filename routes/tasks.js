const router = require('express').Router();
const queries = require('../config/queries');

router.get('/:taskID', (req, res) => {
   queries.showTaskInfo(req, res);
});

router.put('/:taskID/:taskUpdate', (req, res) => {
    queries.changeTask(req, res);
});

router.put('/:taskID/status', (req, res) => {
    queries.toggleTaskStatus(req, res);
})

module.exports = router;