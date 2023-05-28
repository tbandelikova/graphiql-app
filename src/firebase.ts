import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBb6SVS2O65USa7M-OsPGS3sFObZ5hpUkA',
  authDomain: 'graghiql-firebase-auth.firebaseapp.com',
  projectId: 'graghiql-firebase-auth',
  storageBucket: 'graghiql-firebase-auth.appspot.com',
  messagingSenderId: '267608560334',
  appId: '1:267608560334:web:3793be6e0d49e33f31369f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logout = () => {
  signOut(auth);
};

export { auth, db, logout };
