import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import BlankPage from './Pages/BlankPage'
import GeoPage from './Pages/GeoPage'


class PageContent extends Component {
    render() {
        return (
            <div className="container-fluid">

                <Switch>
                    <Route exact path='/' component={BlankPage} />
                    <Route exact path='/geo/zonas' component={GeoPage} />
                </Switch>

            </div>
        );
    }
}

export default PageContent;