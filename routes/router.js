/* 
DEFINE ROUTES FOR APP:
GET     @   '/'                     show login page

GET     @   '/users/:userID'        get user data
POST    @   '/users'                create new user
POST    @   '/users/login'          try to login
POST    @   '/users/logout'         end session and logout
PUT     @   '/users/:userID'        change user info (name / password)
DELETE  @   '/users/:userID'        delete a user
    
GET     @   '/lists'                show all lists for the user
GET     @   '/lists/:listID'        show all tasks in current list
POST    @   '/lists/'               create a new list
POST    @   '/lists/:listID'        create a new task in a list
PUT     @   '/lists/:listID'        change list name
DELETE  @   '/lists/:listID'        delete a list with all tasks inside

GET     @   '/tasks/:taskID'        show task info => NOT SURE IF NEED / MIGHT DELETE IT
PUT     @   '/tasks/:taskID'        change text in the task
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