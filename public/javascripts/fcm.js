var config = {
    apiKey: "AIzaSyAQQkwxViMPnCeqgdqLoX0lZKjrV3TcXCE",
    authDomain: "firendlychat-c32ed.firebaseapp.com",
    databaseURL: "https://firendlychat-c32ed.firebaseio.com",
    storageBucket: "firendlychat-c32ed.appspot.com",
    messagingSenderId: "90145177626"
  };
 firebase.initializeApp(config);

 // Retrieve Firebase Messaging object.
const messaging = firebase.messaging();


messaging.requestPermission()
.then(function() {
  console.log('Notification permission granted.');
  // TODO(developer): Retrieve an Instance ID token for use with FCM.
})
.catch(function(err) {
  console.log('Unable to get permission to notify.', err);
});

function sendToken()  { 
	messaging.getToken()
  .then(function(currentToken){
  	if (currentToken){
  		console.log("My Token :  " + currentToken);
  		$.ajax({
		  url: 'http://localhost:3000/',
  		  type: 'PUT',
          data: {"user":document.getElementById("name").value,"token":currentToken},
          success: function(data) {
          alert('Token Sent');
  		  }
		});
  	}else{
  		console.log("Ask For Token again");
  	}

  })
  .catch (function(err){
  	console.log("Something went wrong when retrieing the token");
  });

}

messaging.onTokenRefresh(function() {
  messaging.getToken()
  .then(function(refreshedToken) {
    console.log('Token refreshed.');
    if (currentToken){
  		console.log("My Token :  " + refreshedToken);
  		$.ajax({
		  url: 'localhost:3000/',
  		  type: 'PUT',
          data: {"user":document.getElementById("name").value,"token":refreshedToken},
          success: function(data) {
          alert('Token refresh Sent');
  		  }
		});
  	}
    
  })
  .catch(function(err) {
    console.log('Unable to retrieve refreshed token ', err);
   
  });
});


messaging.onMessage(function(payload){

	console.log("I got something... "+ payload.data.message);

});

