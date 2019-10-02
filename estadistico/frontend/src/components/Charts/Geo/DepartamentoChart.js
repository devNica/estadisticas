import React, { Component } from 'react';
import { getChartData } from '../../../actions/charts'
import { connect } from 'react-redux'
import Pie from '../type/Pie'
import Doughnut from '../type/Doughnut'
import Bar from '../type/Bar'

class DepartamentoChart extends Component {

    state = {
        selectedOption: 'P'
    }

    handleOnchange = e => {
        this.setState({
            selectedOption: e.target.value
        });
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.getChartData('departamentos')
    }

    handleClick = e => {

        this.props.getChartData()
    }


    render() {

        const { selectedOption } = this.state


        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        Grafico de Extension Territorial
                    </div>

                    {
                        selectedOption === 'P' ? <Pie /> :
                            selectedOption === 'B' ? <Bar /> :
                                selectedOption === 'D' ? <Doughnut /> : null}


                    <div className="card-body">
                        <form onSubmit={this.handleOnSubmit} className='form-inline'>
                            <div className="form-group mr-3">
                                <label htmlFor="id_pie">
                                    <input
                                        type="radio"
                                        value='P'
                                        className='form-control'
                                        id='id_pie'
                                        checked={selectedOption === 'P'}
                                        onChange={this.handleOnchange} />
                                    Grafica de Pastel</label>
                            </div>
                            <div className="form-group mr-3">
                                <label htmlFor="id_doughnut">
                                    <input
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
                                        type="radio"
                                        value='B'
                                        className='form-control'
                                        id='id_bar'
                                        checked={selectedOption === 'B'}
                                        onChange={this.handleOnchange} />
                                    Grafica de Barra</label>
                            </div>
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

            </div>
        );
    }
}

const mapStateToProps = state => ({
    departamentos: state.geo.departamentos
})

export default connect(mapStateToProps, { getChartData })(DepartamentoChart);