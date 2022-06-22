import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { REACT_APP_PROJECT_ID, REACT_APP_API_KEY } from '@env'

const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_PROJECT_ID + '.firebaseapp.com',
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_PROJECT_ID + ".appspot.com",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);

// Si descomentas la siguiente línea, cuando mientras que el usuario no se desloguee expresamente o cierre el navegador, permanecerá logueado y podremos acceder a su id desde cualquier página
setPersistence(auth, browserLocalPersistence);