require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/router');

const port = process.env.PORT || 8080;

// set tamplate enging to PUG
app.set('view engine', 'pug');

// apply router middleware
app.use('/users', router.users);
app.use('/tasks', router.tasks);
app.use('/lists', router.lists);

app.get('/', (req, res) => {
    res.send('Hello world!');
})

// UPDATE IT TO SHOW 404 PAGE
app.get('*', (req, res) => {
    res.status(404).send(`Sorry, there is no such directory`);
})

app.listen(port, () => console.log(`Server running on port: ${port}`));