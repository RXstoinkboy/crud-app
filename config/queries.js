// LISTS
const getAllLists = require('./queries/getAllLists');
const showCurrentTasks = require('./queries/showCurrentTasks');
const createNewList = require('./queries/createNewList');
const createNewTask = require('./queries/createNewTask');
const changeListName = require('./queries/changeListName');
const deleteList = require('./queries/deleteList');

// TASKS
const showTaskInfo = require('./queries/showTaskInfo');
const changeTask = require('./queries/changeTask');
const toggleTaskStatus = require('./queries/toggleTaskStatus');
const switchList = require('./queries/switchList');
const deleteTask = require('./queries/deleteTask');

module.exports = {
    getAllLists,
    showCurrentTasks,
    createNewList,
    createNewTask,
    changeListName,
    deleteList,

    showTaskInfo,
    changeTask,
    toggleTaskStatus,
    switchList,
    deleteTask
};