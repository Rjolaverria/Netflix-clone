import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HOME, SIGN_IN, SIGN_UP, BROWSE } from './constants/routes';
import { Home, SignIn, SignUp, Browse } from './pages';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={HOME}>
                    <Home />
                </Route>
                <Route path={SIGN_IN}>
                    <SignIn />
                </Route>
                <Route path={SIGN_UP}>
                    <SignUp />
                </Route>
                <Route path={BROWSE}>
                    <Browse />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
