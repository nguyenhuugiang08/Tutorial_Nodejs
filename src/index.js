const path = require('path')
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const db = require('./config/db')

// Connect to database
db.connect();

const route = require('./routes');

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'));

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


// Route init
route(app);

app.listen(port)
