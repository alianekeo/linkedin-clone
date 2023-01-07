import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBaH-x6FvZ0qvmWkOuwKbKS79j5LxZnToU",
    authDomain: "linkedin-clone-yt-a37de.firebaseapp.com",
    projectId: "linkedin-clone-yt-a37de",
    storageBucket: "linkedin-clone-yt-a37de.appspot.com",
    messagingSenderId: "505201503424",
    appId: "1:505201503424:web:64acb7d478476fa1725125"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};