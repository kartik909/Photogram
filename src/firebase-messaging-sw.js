
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
var config = {
  apiKey: "AIzaSyBv-QbcOHdsAFdXqiguExyB27PEMmZ1tn0",
  authDomain: "photogram-1.firebaseapp.com",
  databaseURL: "https://photogram-1.firebaseio.com",
  projectId: "photogram-1",
  storageBucket: "photogram-1.appspot.com",
  messagingSenderId: "508464429146"
};
firebase.initializeApp(config);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
