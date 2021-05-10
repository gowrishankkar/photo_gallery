import * as firebase from "frirebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAmRHl1sw4udJu11TRrF-rudKLAcot0LEA",
  authDomain: "photo-gallery-a2a26.firebaseapp.com",
  projectId: "photo-gallery-a2a26",
  storageBucket: "photo-gallery-a2a26.appspot.com",
  messagingSenderId: "1057143377171",
  appId: "1:1057143377171:web:b3cfe7390596118e715ee6",
  measurementId: "G-94L6QN132Z",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
