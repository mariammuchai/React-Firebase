import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDE2r5ZaUIW8JF0UR2SVucCnYUdtp2Jh5Y",
    authDomain: "mymoney-99283.firebaseapp.com",
    projectId: "mymoney-99283",
    storageBucket: "mymoney-99283.appspot.com",
    messagingSenderId: "84650204933",
    appId: "1:84650204933:web:9823d505083b73bb65616c"
  };

  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig);


  //init service
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();

  export { projectFirestore, projectAuth };