import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './global-styles';
import App from './App';
import FirebaseContext from './context/firebase';
import firebaseConfig from './firebaseConfig';
import * as serviceWorker from './serviceWorker';

const firebase = window.firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
