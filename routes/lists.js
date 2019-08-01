const router = require('express').Router();
const queries = require('./queries');
const auth = require('../middlewares/auth');

router.get('/allLists/:userID', auth, (req, res) => {
    queries.getAllLists(req, res);
})

router.get('/singleList/:userID/:listID', auth, (req, res) => {
    queries.showCurrentTasks(req, res);
})

router.post('/createList/:userID/:listName', auth, (req, res) => {
    queries.createNewList(req, res);
})

router.put('/changeListName/:userID/:listID', auth, (req, res) => {
    queries.changeListName(req, res);
})

router.delete('/delete/:listID', auth, (req, res) => {
    queries.deleteList(req, res);
})

module.exports = router;