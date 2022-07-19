const path = require('path')
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');

const db = require('./config/db')

// Connect to database
db.connect();

const route = require('./routes');

const app = express();
const port = 8000;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'));

app.engine('.hbs', engine({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  }
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


// Route init
route(app);

app.set('port', process.env.PORT || 8000);

const server = app.listen(process.env.PORT || 8000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});

