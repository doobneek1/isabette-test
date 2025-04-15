
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, remove, set } from 'firebase/database';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyArRhxR0psAeLuLsIgRWVXdxvtFtoQ5KT4",
  authDomain: "data-2c98d.firebaseapp.com",
  databaseURL: "https://data-2c98d-default-rtdb.firebaseio.com",
  projectId: "data-2c98d",
  storageBucket: "data-2c98d.appspot.com",
  messagingSenderId: "767884466660",
  appId: "1:767884466660:web:ccfa2e4ccce355c472cff1",
  measurementId: "G-KWY4NT1RZP"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, ref, push, onValue, remove, set, auth, provider };
