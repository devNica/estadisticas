import React, { Component } from 'react';
import { getDepartamento, resetDepartamentos } from '../../actions/geo'
import { connect } from 'react-redux'
import MunicipioData from '../Data/MunicipioData'
import MunicipioChart from '../Charts/Geo/MunicipioChart';

class DepartamentoPage extends Component {

    componentDidMount() {
        const { match: { params } } = this.props

        this.props.getDepartamento(params.id)
    }

    render() {

        const { municipio, nombre } = this.props.departamento

        return (
            <div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3 bg-dark">
                        <h6 className='m-0 font-weight-bold text-warning'>Municipios de {nombre}</h6>
                    </div>

                    {municipio ?

                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" cellSpacing='0'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Municipio</th>
                                            <th>Cabecera</th>
                                            <th>Extension (Km<sup>2</sup>)</th>
                                            <th>Latitud Norte</th>
                                            <th>Longitud Oeste</th>
                                            <th>Nivel del Mar (m)</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {municipio.map(m => (
                                            <MunicipioData
                                                id={m.id}
                                                municipio={m.nombre}
                                                cabecera={m.cabecera}
                                                extension={m.extension}
                                                latitud={m.latitud_norte}
                                                longitud={m.longitud_oeste}
                                                msm={m.msm}
                                                key={m.id} />
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div> : null}
                </div>

                <MunicipioChart />

            </div>
        );
    }
}

const mapStateToProps = state => ({
    departamento: state.geo.departamento
})

export default connect(mapStateToProps, { getDepartamento })(DepartamentoPage);