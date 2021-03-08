import firebase from 'firebase';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBBQwCRQ_kODy2D-Q7iiTCbeQgSsq4Yr0c",
  authDomain: "crwn-db-315b8.firebaseapp.com",
  databaseURL: "https://crwn-db-315b8.firebaseio.com",
  projectId: "crwn-db-315b8",
  storageBucket: "crwn-db-315b8.appspot.com",
  messagingSenderId: "287740000521",
  appId: "1:287740000521:web:9e0c9c457e68cd1f1f7bd8",
  measurementId: "G-F2LEHCBBEQ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
