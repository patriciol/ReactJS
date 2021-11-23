import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDiJDk2y-njb5V7HWPJHeWh7Z6IAfqREu8",
    authDomain: "proyecto-reactcoder.firebaseapp.com",
    projectId: "proyecto-reactcoder",
    storageBucket: "proyecto-reactcoder.appspot.com",
    messagingSenderId: "467342603930",
    appId: "1:467342603930:web:8a71b767f69b423f6d9123"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore() {
    return firebase.firestore(app)
}