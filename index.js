var express = require('express');
const bodyParser = require('body-parser');
var compression = require('compression')
var cors = require('cors');
const app = express();
const PORT = 80;
app.use(cors());
app.use(compression());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static('build'));



app.listen(PORT, console.log(`App listening on port ${PORT}!`));

