require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/router');
const auth = require('./middlewares/auth');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const fs = require('fs');
const sass = require('node-sass');

const port = process.env.PORT || 8080;

// set tamplate enging to PUG
app.set('view engine', 'pug');

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(compression());
app.use(express.static('public'));

sass.render({
    file: './src/scss/style.scss',
    outFile: './public/css/style.css',
    outputStyle: 'compressed',
    sourceMap: true
  }, function(err, result) {
      if(!err){
          fs.writeFile('./public/css/style.css', result.css, (err, result)=>{
              if(!err){
                  console.log(result)
              }
          })
      }
  });

// apply router middleware
app.use('/users', router.users);
app.use('/tasks', router.tasks);
app.use('/lists', router.lists);

app.get('/', (req, res) => {
    res.render('home')
    // res.status(200);
})

// UPDATE IT TO SHOW 404 PAGE
app.get('*', (req, res) => {
    res.status(404).send(`Sorry, there is no such directory`);
})

app.listen(port, () => console.log(`Server running on port: ${port}`));

module.exports = app;