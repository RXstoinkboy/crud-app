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

// USERS
const createNewUser = require('./queries/createNewUser');
const getUserInfo = require('./queries/getUserInfo');
const changePassword = require('./queries/changePassword');
const login = require('./queries/login');
const logout = require('./queries/logout');
const deleteUser = require('./queries/deleteUser');

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
    deleteTask,

    createNewUser,
    getUserInfo,
    changePassword,
    login,
    logout,
    deleteUser
};