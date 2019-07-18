const router = require('express').Router();
const queries = require('../config/queries');

router.get('/:taskID', (req, res) => {
   queries.showTaskInfo(req, res);
});

router.put('/update/:taskID/:taskUpdate', (req, res) => {
    queries.changeTask(req, res);
});

router.put('/status/:taskID', (req, res) => {
    queries.toggleTaskStatus(req, res);
})

router.post('/createTask/:userID/:listID/:task', (req, res) => {
    queries.createNewTask(req, res);
})

router.put('/switchList/:taskID/:listID', (req, res) => {
    queries.switchList(req, res);
})

router.delete('/:taskID', (req, res) => {
    queries.deleteTask(req, res);
})

module.exports = router;