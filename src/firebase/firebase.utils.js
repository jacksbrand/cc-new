import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA8nTb_KfsAtbsiqMSW0nAEh6jBUMXullg",
    authDomain: "cc-db-de819.firebaseapp.com",
    databaseURL: "https://cc-db-de819.firebaseio.com",
    projectId: "cc-db-de819",
    storageBucket: "cc-db-de819.appspot.com",
    messagingSenderId: "684462337532",
    appId: "1:684462337532:web:4cb94be2568425f1945679"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;