import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const Config = {
    apiKey: "AIzaSyCX5DleTYcJGCD3Sxh6USmJ4pYIAcr7wJw",
    authDomain: "moda-db.firebaseapp.com",
    projectId: "moda-db",
    storageBucket: "moda-db.appspot.com",
    messagingSenderId: "121044128014",
    appId: "1:121044128014:web:4ac7f86fc3a6615eef875f",
    measurementId: "G-N94796625S"
};
firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInwithGoogle = () => auth.signInWithPopup(provider);
export default firebase;