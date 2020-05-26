'use strict';

// include modules
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const sql = require("sqlite3").verbose();
const FormData = require("form-data");

const yelp = require('yelp-fusion');
const client = yelp.client('aJWwPTnE-goeaz8rXnz0yI2nsN2eweeAu28TFozM_QMrNaPeumqL9VYXaMeKE2ppSGxLcWzQthAdc9TAAzJDXteyj6msOq5ftJJwm3EwC4Yn_JV_KxSww_6-lfnEXnYx');

//creates database in file postcard.db
// const postDB = new sql.Database("postcards.db");

// let cmd = " SELECT id FROM sqlite_master WHERE type='table' AND id='post_info' ";
// postDB.get(cmd, function (err, val) {
//     console.log(err, val);
//     if (val == undefined) {
//         console.log("No database file - creating one");
//         createPostcardDB();
//     } else {
//         console.log("Database file found");
//     }
// });

// function createPostcardDB() {
//   // explicitly declaring the rowIdNum protects rowids from changing if the 
//   // table is compacted; not an issue here, but good practice
//   const cmd = 'CREATE TABLE post_info ( randomkey TEXT PRIMARY KEY UNIQUE, postcard TEXT)';
//   postDB.run(cmd, function(err, val) {
//     if (err) {
//       console.log("Database creation failure",err.message);
//     } else {
//       console.log("Created database");
//     }
//   });
// }


// let storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, __dirname+'/images')    
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname)
//   }
// })
// let upload = multer({dest: __dirname+"/assets"});
// let upload = multer({storage: storage});

// begin constructing the server pipeline
const app = express();

// Serve static files out of public directory
app.use(express.static('public'));

// Also serve static files out of /images
app.use("/images",express.static('images'));

// Handle GET request to base URL with no other route specified
// by sending creator.html, the main page of the app
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/public/creator.html');
});

app.post("/yelpAPI", express.json(), function (req, res){
  console.log(req.body.term);
  console.log(req.body.location);

  client.search({
    term: req.body.term,
    location: req.body.location,
  }).then(response => {
    res.send(response.jsonBody.businesses);
  }).catch(e => {
    console.log(e);
  });
});

app.get("/startNewGame", function (req, res){
  let randomID = createId();
  console.log(randomID);
  res.send(randomID);
});

// Next, the the two POST AJAX queries

// Handle a post request containing JSON
// app.use(bodyParser.json());
// gets JSON data into req.body
// app.post('/saveDisplay', function (req, res) {
//   console.log(req.body);
  
//   let randID = createId();
//   console.log(randID);
//   let cmd = "INSERT INTO post_info (randomkey, postcard) VALUES (?,?)";
//   postDB.run(cmd, randID, JSON.stringify(req.body), function(err){
//     if (err) {
//       console.log("DB insert error",err.message);
//       //next();
//     } else {
//       let newId = this.lastID; // the rowid of last inserted item
//       res.send(JSON.stringify(randID));
//     }
//   });
//   // res.send("All well");
// });

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


function createId() {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 22; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}