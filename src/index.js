import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './global-styles';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Firebase Setup
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import FirebaseContext from './context/firebase';

let firebaseConfig;
if (process.env.NODE_ENV === 'development'){
    firebaseConfig = require('./firebaseConfig').default
} else if (process.env.NODE_ENV === 'production'){
    firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID,
    }
}
console.log(process.env)

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
