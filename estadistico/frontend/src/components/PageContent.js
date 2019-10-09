import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import BlankPage from './Pages/BlankPage'
import GeoPage from './Pages/GeoPage'
import DepartamentosPage from './Pages/DepartamentosPage';
import DepartamentoPage from './Pages/DepartamentoPage';
import PrecipitacionesPage from './Pages/PrecipitacionesPage';

class PageContent extends Component {
    render() {
        return (
            <div className="container-fluid">

                <Switch>
                    <Route exact path='/' component={BlankPage} />
                    <Route exact path='/geo/zonas' component={GeoPage} />
                    <Route exact path='/geo/departamentos' component={DepartamentosPage} />
                    <Route exact path='/geo/departamento/:id' component={DepartamentoPage} />
                    <Route exact path='/clima/precipitaciones' component={PrecipitacionesPage} />
                </Switch>


            </div>
        );
    }
}

export default PageContent;