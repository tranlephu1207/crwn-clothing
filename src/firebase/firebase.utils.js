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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
