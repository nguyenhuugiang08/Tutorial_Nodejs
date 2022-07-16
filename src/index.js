const path = require('path')
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const { zing } = require("zingmp3-api-next");

(async() => {
    const data = await zing.get_home();
    console.log(data);
  })();

  (async() => {
    const data = await zing.get_song("ZW8WOI6U");
    console.log(data);
  })();

const app = express();
const port = 3002;

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'));

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port)