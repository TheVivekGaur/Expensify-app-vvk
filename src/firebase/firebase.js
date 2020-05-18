import * as firebase from 'firebase';

const  Config = {
    apiKey: "AIzaSyAltLjnPUYA4_RvvEzq1asZC0K0HXkkgZA",
    authDomain: "expensify-53dce.firebaseapp.com",
    databaseURL: "https://expensify-53dce.firebaseio.com",
    projectId: "expensify-53dce",
    storageBucket: "expensify-53dce.appspot.com",
    messagingSenderId: "32520583804",
    appId: "1:32520583804:web:d91081c03382eaf20de7f9",
    measurementId: "G-0R2K6JVEMM"
  };

  firebase.initializeApp(Config);

  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase , googleAuthProvider , database as default };