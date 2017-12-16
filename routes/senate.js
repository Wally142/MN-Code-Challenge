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
          console.log('work please');
          res.send(resultObj.rows);
        }
      });
    }
  });
}); //end get

router.post('/', function (req, res) {
  console.log('in router post', req.body);
  var input = req.body;
  var thisId = req.body.id;
  console.log('id', req.body.id);
  pool.connect(function (error, client, done) {
    if (error) {
      console.log(error);
      res.sendStatus(404);
    } else {
      var queryString = 'INSERT INTO intakeform (name, phone, address, email, comments, real, senator_id, district_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);';
      var citizen = [input.name, input.phone, input.address, input.email, input.comments, input.real, thisId, thisId];
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

router.get('/form/:id', function (req, res) {
  console.log('params', req.params.body);
  pool.connect(function (error, client, done) {
    if (error) {
      console.log(error);
      res.sendStatus(404);
    } else {
      var joinQuery = 'SELECT * FROM senators where id = $1;';
      var value = [req.params.id];
      console.log(value);
      client.query(joinQuery, value, function (queryErr, resultObj) {
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
});// end GET

module.exports = router;