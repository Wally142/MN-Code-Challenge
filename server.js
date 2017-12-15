var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var senateRouter = require('./routes/senate');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/senate', senateRouter);



app.listen(5000, function () {
    console.log('Listening on port:', 5000);
});