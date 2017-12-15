var express = require('express');
var router = express.Router();
var pool = require('../data-model/pool.js');

router.get('/', function (req, res) {
  console.log('Senators Arrived');
  pool.connect(function (error, client, done) {
    if (error) {
      console.log(error);
      res.sendStatus(404);
    } else {
      client.query('SELECT * FROM senators', function (queryErr, resultObj) {
        done();
        if (queryErr) {
          console.log(queryErr)
          res.sendStatus(500);
        } else {
          console.log(resultObj.rows);
          res.send(resultObj.rows);
        }
      });
    }
  });
}); //end get

module.exports = router;