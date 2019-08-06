require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./routes/router');
const auth = require('./middlewares/auth');
const cookieParser = require('cookie-parser');
const compression = require('compression');

// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
// const config = require('./webpack.config');

const port = process.env.PORT || 8080;

// const devServerEnabled = true;

// if(devServerEnabled){
//     config.entry.app.unshift('webpack-hot-middleware/client?reload=true&timeout=1000');
//     config.plugins.push(new webpack.HotModuleReplacementPlugin());
//     const compiler = webpack(config);

//     app.use(webpackDevMiddleware(compiler, {
//         publicPath: config.output.publicPath
//     }))

//     app.use(webpackHotMiddleware(compiler));
// }

// set tamplate enging to PUG
app.set('view engine', 'pug');

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(compression());
app.use(express.static('public'));

// API
app.use('/users', router.users);
app.use('/tasks', router.tasks);
app.use('/lists', router.lists);

app.get('/', (req, res) => {
    // console.log(`config:`, config.output.publicPath)
    res.render('home')
    // res.status(200);
})

// UPDATE IT TO SHOW 404 PAGE
app.get('*', (req, res) => {
    res.status(404).send(`Sorry, there is no such directory`);
})

app.listen(port, () => console.log(`Server running on port: ${port}`));

module.exports = app;