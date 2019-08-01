const router = require('express').Router();
const queries = require('./queries');
const auth = require('../middlewares/auth');

router.get('/:taskID', auth, (req, res) => {
   queries.showTaskInfo(req, res);
});

router.put('/update/:taskID', auth, (req, res) => {
    queries.changeTask(req, res);
});

router.put('/status/:taskID', auth, (req, res) => {
    queries.toggleTaskStatus(req, res);
})

router.post('/createTask/:userID/:listID', auth,(req, res) => {
    queries.createNewTask(req, res);
})

router.put('/switchList/:taskID/:listID', auth, (req, res) => {
    queries.switchList(req, res);
})

router.delete('/:taskID', auth, (req, res) => {
    queries.deleteTask(req, res);
})

module.exports = router;