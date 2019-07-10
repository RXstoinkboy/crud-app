const express = require('express');
const app = express();
const router = require('./routes/router');
require('dotenv').config();

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

app.listen(port, () => console.log(`Server running on port: ${port}`));