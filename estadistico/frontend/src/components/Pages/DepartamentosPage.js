import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { getDepartamentos } from '../../actions/geo'
import GeoTarget from '../Target/GeoTarget'
import DepartamentoChart from '../Charts/Geo/DepartamentoChart';

class DepartamentoPage extends Component {

    componentDidMount() {
        this.props.getDepartamentos()
    }

    render() {

        const { departamentos } = this.props;

        return (
            <Fragment>

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <div className="card">
                        <div className="card-header">
                            Informacion Geografica por Zonas
                </div>
                    </div>
                </div>
                <div className="row">
                    {departamentos.map((departamento) => (
                        <GeoTarget title={departamento.nombre} key={departamento.id} extension={departamento.extension} id={departamento.id} control={2} />
                    ))}
                </div>

                <DepartamentoChart />


            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    departamentos: state.geo.departamentos
})

export default connect(mapStateToProps, { getDepartamentos })(DepartamentoPage);