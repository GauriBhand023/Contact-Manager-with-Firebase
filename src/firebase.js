import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcdUst0t9zD9OqGFh6jEUXQD48jlp-s60",
  authDomain: "react-crud-96b0f.firebaseapp.com",
  databaseURL: "https://react-crud-96b0f-default-rtdb.firebaseio.com",
  projectId: "react-crud-96b0f",
  storageBucket: "react-crud-96b0f.appspot.com",
  messagingSenderId: "1015994363752",
  appId: "1:1015994363752:web:764384ff0e0e3a5b7bb0dd"
};
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();