'use strict';
var express = require('express');
var app = express();
var fs = require("fs");
var path = require("path");
var exec = require('child_process').exec;


var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
var upload = multer({ dest: '/tmp' })

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname +'/fileupload.html'));
})

app.post('/file_upload', upload.single("file"), function (req, res) {
  var file_name = req.file.originalname
  var file = __dirname + "/python_scripts/images/" + file_name;
  var response = {};
  fs.readFile( req.file.path, function (err, data) {
    fs.writeFile(file, data, function (err) {
      if( err ){
        response = {
          message: 'Sorry, file couldn\'t be uploaded.',
          filename: file_name,
          error: err
        };
        return res.end(JSON.stringify(response));
      } else{
        executePrediction(file_name,function (err, result) {
          if (err) {
            response = {
              message: 'Prediction failed',
              filename: file_name,
              error: err
            }
          } else {
            response = {
              message: 'Prediction Pass',
              filename: file_name,
              result: result
            }
          }
          return res.end(JSON.stringify(response));
        })
      }
    });
  });
})

function executePrediction(fileName, callBack) {
  exec('bash predict.sh '+ fileName  ,function(err,stdout,stderr){
    console.log(err, stdout, stderr)
    console.log(" ");
    if (err) {
      return callBack(err)
    }
    var result = stdout.split('\n')
    result = result[result.length-2]
    callBack(null, result)
  })
}

var server = app.listen(8080, function () {
  var host = 'localhost';
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
