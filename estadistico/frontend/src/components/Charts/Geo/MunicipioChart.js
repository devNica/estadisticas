import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Bar from '../type/Bar'
import Doughnut from '../type/Doughnut'
import Line from '../type/Line'
import { resetChartData, getChartData } from '../../../actions/charts'

class MunicipioChart extends Component {

    state = {
        //E: Graficas de Extension, A: Graficas de altura 
        tipo: 'ext',
        //D: Grafico de tipo Dona, B: Grafico de tipo Barra
        selectedOption: 'D'
    }

    handleOnchange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    handleOnSubmit = e => {
        e.preventDefault()
        this.props.getChartData('municipios', this.state.tipo)
    }

    componentDidMount() {
        this.props.resetChartData()
    }

    handleOnclick = e => {
        this.props.resetChartData()
        if (this.state.tipo === 'ext') {
            this.setState({
                selectedOption: 'L'
            })
        }
        else {
            this.setState({
                selectedOption: 'D'
            })
        }
    }

    render() {

        const { tipo, selectedOption } = this.state;

        const opcionesExtension = (
            <Fragment>

                <div className="form-group mr-3">
                    <label htmlFor="id_doughnut">
                        <input
                            name='selectedOption'
                            type="radio"
                            value='D'
                            className='form-control'
                            id='id_doughnut'
                            checked={selectedOption === 'D'}
                            onChange={this.handleOnchange} />
                        Grafica de Dona</label>
                </div>
                <div className="form-group mr-3">
                    <label htmlFor="id_bar">
                        <input
                            name='selectedOption'
                            type="radio"
                            value='B'
                            className='form-control'
                            id='id_bar'
                            checked={selectedOption === 'B'}
                            onChange={this.handleOnchange} />
                        Grafica de Barra</label>
                </div>

            </Fragment>
        )

        const opcionesAltura = (
            <div className="form-group mr-3">
                <label htmlFor="id_bar">
                    <input
                        name='selectedOption'
                        type="radio"
                        value='L'
                        className='form-control'
                        id='id_bar'
                        checked={selectedOption === 'L'}
                        onChange={this.handleOnchange} />
                    Grafica de Linea</label>
            </div>
        )

        return (
            <div className='card'>
                <div className="card-header">
                    Perfiles Geograficos
                </div>

                {
                    selectedOption === 'L' ? <Line ratio={true} /> :
                        selectedOption === 'B' ? <Bar ratio={true} /> :
                            selectedOption === 'D' ? <Doughnut ratio={true} /> : null}

                <div className="card-body">
                    <form onSubmit={this.handleOnSubmit} className='form-inline'>


                        <div className="form-group mr-3">
                            <label htmlFor="id_tipoE">
                                <input
                                    onClick={this.handleOnclick}
                                    name='tipo'
                                    type="checkbox"
                                    value='ext'
                                    className='form-control'
                                    id='id_tipoE'
                                    checked={tipo === 'ext'}
                                    onChange={this.handleOnchange} />
                                Extension</label>
                        </div>

                        <div className="form-group mr-3">
                            <label htmlFor="id_tipoA">
                                <input
                                    onClick={this.handleOnclick}
                                    name='tipo'
                                    type="checkbox"
                                    value='alt'
                                    className='form-control'
                                    id='id_tipoA'
                                    checked={tipo === 'alt'}
                                    onChange={this.handleOnchange} />
                                Altura</label>
                        </div>

                        {tipo === 'ext' ? opcionesExtension : opcionesAltura}

                        <div className="form-group">
                            <input type="submit"
                                value='Graficar'
                                className='btn' />

                        </div>

                    </form>
                </div>
                <div className="card-footer">
                    <p className='ml-auto'>
                        Datos proporcionados por el INIDE, Anuario Estadistico(2016)
                        </p>
                </div>
            </div>
        );
    }
}

export default connect(null, { resetChartData, getChartData })(MunicipioChart);