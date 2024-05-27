// config.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBW7Ux0E5yIf5g6hGDCp9jJXQqfRsPlRks",
  authDomain: "test-d49f3.firebaseapp.com",
  projectId: "test-d49f3",
  storageBucket: "test-d49f3.appspot.com",
  messagingSenderId: "181473845503",
  appId: "1:181473845503:web:dd0c46af656a053fc62cca",
  measurementId: "G-JPHR3PDM0T"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
