import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPrecipitacionDepartamento } from '../../actions/clima'
import DepartamentoChart from '../Charts/clima/DepartamentoChart';

class PrecipitacionPage extends Component {


    componentDidMount() {

        const { match: { params } } = this.props
        this.props.getPrecipitacionDepartamento(params.id)


    }

    render() {

        const { BD, UD, nombre, isBidimensional } = this.props.multiData
        return (
            <div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3 bg-primary">
                        <h6 className='m-0 font-weight-bold text-white'>
                            Media de Precipitacion mensual en (mm) para el departamento de {nombre}
                        </h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" cellSpacing='0'>
                                <thead>
                                    <tr>
                                        <th>Municipio</th>
                                        <th>Enero</th>
                                        <th>Febrero</th>
                                        <th>Marzo</th>
                                        <th>Abril</th>
                                        <th>Mayo</th>
                                        <th>Junio</th>
                                        <th>Julio</th>
                                        <th>Agosto</th>
                                        <th>Septiembre</th>
                                        <th>Octubre</th>
                                        <th>Noviembre</th>
                                        <th>Diciembre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {UD !== undefined ?
                                        //hay datos en el arreglo Unidimensional?
                                        UD.length > 0 ?
                                            //si, mapear la informacion
                                            <tr>{UD.map((pcp, i) => (<td key={i}>{pcp}</td>))}</tr> :
                                            //no hay, entonces el arreglo bidimencional    //debe contener la informacion 
                                            BD.map((bd, i) => (
                                                <tr key={i}>
                                                    {bd.map((pcp, j) => (
                                                        <td key={j}>{pcp}</td>
                                                    ))}
                                                </tr>
                                            ))


                                        : null}
                                </tbody>
                            </table>
                        </div>
                        {isBidimensional !== undefined ?
                            <DepartamentoChart />
                            : null}

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    multiData: state.clima.multiData
})

export default connect(mapStateToProps, { getPrecipitacionDepartamento })(PrecipitacionPage);