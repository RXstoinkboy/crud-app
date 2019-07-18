const router = require('express').Router();
const queries = require('../config/queries');

router.get('/allLists/:userID', (req, res) => {
    queries.getAllLists(req, res);
})

router.get('/singleList/:userID/:listID', (req, res) => {
    queries.showCurrentTasks(req, res);
})

router.post('/createList/:userID/:listName', (req, res) => {
    queries.createNewList(req, res);
})

router.put('/changeListName/:userID/:listID/:newName', (req, res) => {
    queries.changeListName(req, res);
})

router.delete('/delete/:listID', (req, res) => {
    queries.deleteList(req, res);
})

module.exports = router;