var express = require('express');
var router = express.Router();
var path = require('path');
var http = require('http');
var FCM = require('fcm-node');


var appDir = path.dirname(require.main.filename);

var serverkey = 'AIzaSyBi58BmDRn1WqYwZmOloFqY7sfbty_AknY';
var fcm = new FCM(serverkey);


var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: "fr09tYn3nvE:APA91bH1AHTWFOOn82X0HhuUmDw9Vs8LD4i10CacF6HydI8soc8zVXnQ9NnQ3Szh9Hpe_jYy-pPgU65rBZMR0skRkz-5sPa5LitCo4hZVj9eYb4wiKDgPl4vnQk3a9oRTdefRc_breGG", 
   
    data: {  //you can send only notification or only data(or include both)
        user: 'my value',
        message: 'my another value'
    }
};

var users= [];
/* GET home page. */
router.get('/', function(req, res, next) {

  var options = {
    root: path.resolve(appDir, 'public/html')
  };

  var fileName = 'index.html';
  
  res.sendFile(fileName, options, function (err) {
    if (err) {
      //console.log(options.root+"/index.html");
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });

});


router.post('/', function(req, res, next){
	console.log(req);
	console.log("Sending to token : " +' cbqz3yNkH9c:APA91bFofI3qSTzBZ3QjTxUJvLJawk3-4OlQA1yrsgaQkKtpQPkMuYzkS1Tfd2q6fFUnKmGPaIxKzN7ftky4uH6J_S-jLsyQzjTe5dueuQlEPpXylTckBJ7Y6G5iLtD3q4ALoL7524v4');
	var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: 'cbqz3yNkH9c:APA91bFofI3qSTzBZ3QjTxUJvLJawk3-4OlQA1yrsgaQkKtpQPkMuYzkS1Tfd2q6fFUnKmGPaIxKzN7ftky4uH6J_S-jLsyQzjTe5dueuQlEPpXylTckBJ7Y6G5iLtD3q4ALoL7524v4', 
   
    data: {  //you can send only notification or only data(or include both)
        user: 'Akhil',
        message: req.body.message
    }
};
	
	fcm.send(message, function(err, response){
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Successfully sent with response: ", response);
    }
});

});

router.put('/', function(req, res, next){
	console.log(req);
	users.push({"user":req.body.user, "token":req.body.token});
});

module.exports = router;
