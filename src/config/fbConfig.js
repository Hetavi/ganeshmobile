import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBEKeUEhvgOnhnVqITrB6aoBASuASpiEoE",
  authDomain: "ganeshmob-borsad.firebaseapp.com",
  databaseURL: "https://ganeshmob-borsad.firebaseio.com",
  projectId: "ganeshmob-borsad",
  storageBucket: "ganeshmob-borsad.appspot.com",
  messagingSenderId: "18320272422",
  appId: "1:18320272422:web:c9391e6e8ab24b57dfcae7",
  measurementId: "G-E3BKLN5RHF"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 