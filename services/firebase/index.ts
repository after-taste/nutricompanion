import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDK1TJPJK487NAvCxwJlXeyaPT5D9uVttw",
    authDomain: "nutricompanion-develop.firebaseapp.com",
    projectId: "nutricompanion-develop",
    storageBucket: "nutricompanion-develop.appspot.com",
    messagingSenderId: "753703219035",
    appId: "1:753703219035:web:fcaa96d461537e0cb9747e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    app,
    auth,
    db
};
