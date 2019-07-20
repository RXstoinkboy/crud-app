/* 

X - done
XC - done, but some changes needed

DEFINE ROUTES FOR APP:
GET     @   '/'                     show main page => LOGIN PAGE if not logged in

POST    @ X  '/users'                create new user
GET     @   '/users/:userID'        get user data
PUT     @   '/users/:userID'        change user data (name / password)
DELETE  @   '/users/:userID'        delete a user
POST    @   '/users/login'          try to login
POST    @   '/users/logout'         end session and logout
    
GET     @ X   '/lists/allLists/:userID'   show all lists for the user
GET     @ X  '/lists/singleList/:userID/:listID'  show all tasks in current list
POST    @ XC  '/lists/createList/:userID/:listName'   create a new list => SHOULD BE CHANGED TO TAKE TASK NAME FROM INPUT FIELD
PUT     @ XC  '/lists/changeListName/:userID/:listID/:newName'        change list name => SHOULD USE DATA FROM INPUT
DELETE  @ X  '/lists/delete/:listID'        delete a list with all tasks inside

GET     @ X   '/tasks/:taskID'        show task info => NOT SURE IF NEED / MIGHT DELETE IT
PUT     @ X  '/tasks/update/:taskID/:taskUpdate'        change text in the task => TAKE NEW TASK TEXT FROM INPUT
PUT     @ X  '/tasks/status/:taskID'  toggle task status (active?) between TRUE/FALSE
PUT     @ X  '/tasks/switchList/:taskID/:listID move a task to a different list
POST    @ XC  '/tasks/createTask/:userID/:listID/:task'   create a new task in a list => SHOULD TAKE TASK NAME FROM INPUT
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