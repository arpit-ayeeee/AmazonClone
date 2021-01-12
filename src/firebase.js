import firebase from 'firebase';      //Using the firebase

const firebaseConfig = {              //We'll copy this from the firebase website
  apiKey: "AIzaSyBcHv4yEnS6cfeIP4UzOH7AAtq6qsWjq1A",
  authDomain: "clone-ed18e.firebaseapp.com",
  projectId: "clone-ed18e",
  storageBucket: "clone-ed18e.appspot.com",
  messagingSenderId: "851948451264",
  appId: "1:851948451264:web:f19a166fe7aa9f707dc425",
  measurementId: "G-HVEHQKBRE6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);    //We just need to initialize the react app with firbase usimg this

const db  = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};