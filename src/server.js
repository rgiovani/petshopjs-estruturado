const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3333;
const database = require('./database/index');

const routes = require('./routes');

app.set('view engine', 'ejs');

app.use(cors());
app.use(bodyParser.json());
app.use(expressLayouts);
app.use(bodyParser.urlencoded()); //middleware
app.use(express.static(__dirname + '/public')); //importa os arquivos static (styles e css)
app.use(routes) 

app.listen(port, () => {
  console.log(`listening in port ${port}`);
});