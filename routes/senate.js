//required node modules for database communication to be executed as well as node mailer
var express = require('express');
var router = express.Router();
var pool = require('../data-model/pool.js');
var nodemailer = require('nodemailer');
require('dotenv').config();

router.get('/', function (req, res) {// querty to get senator information from database
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
          res.send(resultObj.rows);
        }
      });
    }
  });
}); //end get Senators

router.post('/', function (req, res) {//query to post into database and initiates nodemailer
  console.log('in router post');
  var input = req.body;//variable holding data from form
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
          var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: 'mnsenate.mailer@gmail.com',//example email for sender
              pass: process.env.MAILERPASSWORD
            }
          })
          var mailOptions = {
            from: 'mnsenate.mailer@gmail.com',
            to: input.senator_email,//sends to correct senator's email
            subject: 'Constituent message received',
            html: '<p>Message From</p>' + input.name +'<p>That says</p>' + input.comments +'<p>Thank you Senator, you can contact me at</p>' + input.phone +'<p>or</p>' + input.email
              
          };
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              console.log(err, info);
            }
          });
          res.sendStatus(201);
        }
      })
    }
  });
});// end post

module.exports = router;





