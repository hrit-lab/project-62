import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyCiQ9UpkM5qYbk_dkgDI9Lmlm2Xm8rRl6Q",
    authDomain: "newspaper-539f1.firebaseapp.com",
    databaseURL: "https://newspaper-539f1-default-rtdb.firebaseio.com",
    projectId: "newspaper-539f1",
    storageBucket: "newspaper-539f1.appspot.com",
    messagingSenderId: "801900456792",
    appId: "1:801900456792:web:92243a177bdafdb511932d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();