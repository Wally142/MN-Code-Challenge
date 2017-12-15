var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/senate', function (req, res) {
    var data = req.body;
    console.log('post worked',data);
    res.sendStatus(201);

});


app.listen(5000, function () {
    console.log('Listening on port:', 5000);
});