importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyAQQkwxViMPnCeqgdqLoX0lZKjrV3TcXCE",
    authDomain: "firendlychat-c32ed.firebaseapp.com",
    databaseURL: "https://firendlychat-c32ed.firebaseio.com",
    storageBucket: "firendlychat-c32ed.appspot.com",
    messagingSenderId: "90145177626"
  };
 firebase.initializeApp(config);


const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
