import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import BlankPage from './Pages/BlankPage'
import GeoPage from './Pages/GeoPage'
import DepartamentosPage from './Pages/DepartamentosPage';
import DepartamentoPage from './Pages/DepartamentoPage';
import PrecipitacionesPage from './Pages/PrecipitacionesPage';
import PrecipitacionPage from './Pages/PrecipitacionPage';

class PageContent extends Component {
    render() {
        return (
            <div className="container-fluid">

                <Switch>
                    <Redirect from='/clima/precipitacion/departamento/0' to='/' />

                    <Route exact path='/' component={BlankPage} />
                    <Route exact path='/geo/zonas' component={GeoPage} />
                    <Route exact path='/geo/departamentos' component={DepartamentosPage} />
                    <Route exact path='/geo/departamento/:id' component={DepartamentoPage} />
                    <Route exact path='/clima/precipitaciones' component={PrecipitacionesPage} />
                    <Route exact path='/clima/precipitacion/departamento/:id' component={PrecipitacionPage} />


                    {/* <Route exact path='/' render={({ location }) => <Redirect to={location.hash.replace('#', '')} />} /> */}

                </Switch>


            </div>
        );
    }
}

export default PageContent;