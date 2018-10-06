// packages that we will need for the server
// these are pretty much libraries we can use
const express = require('express');
const app = express();
const errorhandler = require('errorhandler');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');  

const port = 8080;

app.disable('x-powered-by');

// connecting to mongodb 
mongoose.connect('mongodb://localhost/test')
    .then(() => { console.log('Connection successful!'); })
    .catch((err) => { console.log(err); });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({sec}));

// use only in dev mode
if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
}

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});