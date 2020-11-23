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
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DATABASE_URL,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
        measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    };
}

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
