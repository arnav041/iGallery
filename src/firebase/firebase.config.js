import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB7u7WXCXpSkz8-1SXea_QoR9ZH_x_lAvU",
    authDomain: "igallery-041.firebaseapp.com",
    projectId: "igallery-041",
    storageBucket: "igallery-041.appspot.com",
    messagingSenderId: "661916820570",
    appId: "1:661916820570:web:1cba0ce8a840f51e40e463"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };