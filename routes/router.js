/* 

X - done
XC - done, but some changes needed

DEFINE ROUTES FOR APP:
GET     @   '/'                     show login page

GET     @   '/users/:userID'        get user data
POST    @   '/users'                create new user
POST    @   '/users/login'          try to login
POST    @   '/users/logout'         end session and logout
PUT     @   '/users/:userID'        change user info (name / password)
DELETE  @   '/users/:userID'        delete a user
    
GET     @ X   '/lists/:userID/lists'   show all lists for the user
GET     @ X  '/lists/:userID/:listID'  show all tasks in current list
POST    @ XC  '/lists/:userID/:listName'   create a new list => SHOULD BE CHANGED TO TAKE TASK NAME FROM INPUT FIELD
POST    @ XC  '/lists/:userID/:listID'        create a new task in a list => SHOULD TAKE TASK NAME FROM INPUT
PUT     @ XC  '/lists/:userID/:listID/:newName'        change list name => SHOULD USE DATA FROM INPUT
DELETE  @ X  '/lists/:listID'        delete a list with all tasks inside

GET     @ X   '/tasks/:taskID'        show task info => NOT SURE IF NEED / MIGHT DELETE IT
PUT     @ XC  '/tasks/:taskID/:taskUpdate'        change text in the task => TAKE NEW TASK TEXT FROM INPUT
PUT     @   '/tasks/:taskID/status  toggle task status (active?) between TRUE/FALSE
PUT     @   '/tasks/:taskID/:listID move a task to a different list
DELETE  @   '/tasks/:taskID'        delete a task    
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