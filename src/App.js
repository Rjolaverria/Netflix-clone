import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from './pages/Home';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/signin'>
                    <p>I will be the sign in page</p>
                </Route>
                <Route path='/signup'>
                    <p>I will be the sign up page</p>
                </Route>
                <Route path='/browse'>
                    <p>I will be the browse page</p>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
