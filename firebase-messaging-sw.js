importScripts("https://www.gstatic.com/firebasejs/10.5.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.5.0/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyBXfyKztt-zwukZLYo6vNxuWhbYZpFh_hU",
    authDomain: "libre-oferta-1580218757483.firebaseapp.com",
    databaseURL: "https://libre-oferta-1580218757483.firebaseio.com",
    projectId: "libre-oferta-1580218757483",
    storageBucket: "libre-oferta-1580218757483.appspot.com",
    messagingSenderId: "29156882471",
    appId: "1:29156882471:web:1f842ba6518621b6323602",
    measurementId: "G-WM9T71HP8K"
  };


 
  // Retrieve an instance of Firebase Messaging so that it can handle background
  // messages.
  const app = firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging(app);
 
 
 // If you would like to customize notifications that are received in the
 // background (Web app is closed or not in browser focus) then you should
 // implement this optional method.
 // Keep in mind that FCM will still show notification messages automatically 
 // and you should use data messages for custom notifications.
 // For more info see: 
 // https://firebase.google.com/docs/cloud-messaging/concept-options
 messaging.onBackgroundMessage(function(payload) {
   console.log('[firebase-messaging-sw.js] Received background message ', payload);
   // Customize notification here
   const notificationTitle = 'Background Message Title';
   const notificationOptions = {
     body: 'Background Message body.',
     icon: '/firebase-logo.png'
   };
 
   self.registration.showNotification(notificationTitle,
     notificationOptions);
 });