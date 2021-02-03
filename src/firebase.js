import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbnFv6qG5xz1KVA3p2DnnmhWZeybXbWXE",
  authDomain: "auth-react-r.firebaseapp.com",
  projectId: "auth-react-r",
  storageBucket: "auth-react-r.appspot.com",
  messagingSenderId: "1047066041104",
  appId: "1:1047066041104:web:175944d4d766ac8ac6e395",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
