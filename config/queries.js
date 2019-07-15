const getAllLists = require('./queries/getAllLists');
const showCurrentTasks = require('./queries/showCurrentTasks');
const createNewList = require('./queries/createNewList');
const createNewTask = require('./queries/createNewTask');
const changeListName = require('./queries/changeListName');

module.exports = {
    getAllLists,
    showCurrentTasks,
    createNewList,
    createNewTask,
    changeListName
};