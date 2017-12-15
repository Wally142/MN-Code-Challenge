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

router.post('/', function (req, res) {
  console.log('in router post', req.body);
  var input = req.body;
  pool.connect(function (error, client, done) {
    if (error) {
      console.log(error);
      res.sendStatus(404);
    } else {
      var queryString = 'INSERT INTO intakeform (name, phone, address, email, comments, real, senator_id, district_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);';
      var citizen = [input.name, input.phone, input.address, input.email, input.comments, input.real, input.senator_id, input.district_id];
      client.query(queryString, citizen, function (queryErr, resultObj) {
        done();
        if (queryErr) {
          console.log(queryErr)
          res.sendStatus(500);
        } else {

          res.sendStatus(201);
        }
      });
    }
  });
});// end post

module.exports = router;