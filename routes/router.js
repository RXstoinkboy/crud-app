/* 

X - done
XC - done, but some changes needed

DEFINE ROUTES FOR APP:
GET     @   '/'                     show main page => LOGIN PAGE if not logged in

POST    @ X  '/users'                create new user
GET     @ X  '/users/:username'        get user data
PATCH   @ X  '/users/changePassword'        change user password
DELETE  @ X  '/users'                   delete a user
POST    @ X  '/users/login'          try to login
POST    @ X  '/users/logout'         end session and logout
    
GET     @ X  '/lists/allLists/:userID'   show all lists for the user
GET     @ X  '/lists/singleList/:userID/:listID'  show all tasks in current list
POST    @ X  '/lists/createList/:userID/:listName'   create a new list => SHOULD BE CHANGED TO TAKE TASK NAME FROM INPUT FIELD
PUT     @ X  '/lists/changeListName/:userID/:listID/:newName'        change list name => SHOULD USE DATA FROM INPUT
DELETE  @ X  '/lists/delete/:listID'        delete a list with all tasks inside

GET     @ X  '/tasks/:taskID'        show task info => NOT SURE IF NEED / MIGHT DELETE IT
PUT     @ X  '/tasks/update/:taskID/:taskUpdate'        change text in the task => TAKE NEW TASK TEXT FROM INPUT
PUT     @ X  '/tasks/status/:taskID'  toggle task status (active?) between TRUE/FALSE
PUT     @ X  '/tasks/switchList/:taskID/:listID move a task to a different list
POST    @ X  '/tasks/createTask/:userID/:listID/:task'   create a new task in a list => SHOULD TAKE TASK NAME FROM INPUT
DELETE  @ X  '/tasks/:taskID'        delete a task    
*/

const users = require('./users');
const lists = require('./lists');
const tasks = require('./tasks');

// expose all routes to the app
module.exports = {
    users,
    lists,
    tasks
};