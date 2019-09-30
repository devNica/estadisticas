import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import Geo from './Geo/Geo'
class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path={'/geo'} component={Geo} />
                </Switch>
            </Router>
        );
    }
}

export default App;