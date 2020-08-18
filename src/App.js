import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { HOME, SIGN_IN, SIGN_UP, BROWSE } from './constants/routes';
import { Route } from 'react-router-dom';

import { Home, Signin } from './pages';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={HOME}>
                    <Home />
                </Route>
                <Route path={SIGN_IN}>
                    <Signin />
                </Route>
                <Route path={SIGN_UP}>
                    <p>I will be the sign up page</p>
                </Route>
                <Route path={BROWSE}>
                    <p>I will be the browse page</p>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
