import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/functions';

var firebaseConfig = {
  apiKey: 'AIzaSyAD4P5itc5kGrpie7gjYnWQSmkLLOnVivU',
  authDomain: 'simpragma-rbac.firebaseapp.com',
  databaseURL: 'https://simpragma-rbac.firebaseio.com',
  projectId: 'simpragma-rbac',
  storageBucket: 'simpragma-rbac.appspot.com',
  messagingSenderId: '469196702260',
  appId: '1:469196702260:web:ac14181032df34d1700061',
  measurementId: 'G-KJJ4PFH2PZ',
};
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const database = firebase.database();
const functions = firebase.functions();

export { firestore, auth, storage, database, functions };
