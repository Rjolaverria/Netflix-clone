import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './global-styles';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Firebase Setup
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import FirebaseContext from './context/firebase';
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
