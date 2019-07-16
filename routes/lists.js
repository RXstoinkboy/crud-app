const router = require('express').Router();
const queries = require('../config/queries');

router.get('/:userID/lists', (req, res) => {
    queries.getAllLists(req, res);
})

router.get('/:userID/:listID', (req, res) => {
    queries.showCurrentTasks(req, res);
})

router.post('/:userID/:listName', (req, res) => {
    queries.createNewList(req, res);
})

router.post('/:userID/:listID/:task', (req, res) => {
    queries.createNewTask(req, res);
})

router.put('/:userID/:listID/:newName', (req, res) => {
    queries.changeListName(req, res);
})

router.delete('/:listID', (req, res) => {
    queries.deleteList(req, res);
})

module.exports = router;