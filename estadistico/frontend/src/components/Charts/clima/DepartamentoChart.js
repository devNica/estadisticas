import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { resetChartData, getChartDataClima } from '../../../actions/charts'
import Bar from '../type/Bar'
import Doughnut from '../type/Doughnut'
import Line from '../type/Line'
import Radar from '../type/Radar'

class DepartamentoChart extends Component {

    state = {
        selectA: 'D',
        selectB: 'R',
        dimensiones: 0
    }

    componentDidMount() {
        this.props.resetChartData()

    }

    handleOnchange = e => {
        if (e.target.value !== 'R') {
            this.setState({
                selectA: e.target.value
            });
        } else {
            this.setState({
                selectB: e.target.value
            });
        }

    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.getChartDataClima()

    }

    render() {
        const { selectA, selectB } = this.state
        const { isBidimensional } = this.props
        return (
            <div className='card mt-4'>
                <div className="card">
                    <div className="card-header">
                        Perfil Climatologico de Precipitaciones
                    </div>

                    {
                        !isBidimensional ?
                            selectA === 'L' ? <Line ratio={true} /> :
                                selectA === 'B' ? <Bar ratio={true} /> :
                                    selectA === 'D' ? <Doughnut ratio={true} /> : null :

                            selectB === 'R' ? <Radar ratio={true} /> : null}

                    <div className="card-body">
                        <form onSubmit={this.handleSubmit} className='form-inline'>

                            {isBidimensional ?

                                <div className="form-group">
                                    <label htmlFor="id_radar">
                                        <input
                                            type="radio"
                                            value='R'
                                            className='form-control'
                                            id='id_radar'
                                            checked={selectB === 'R'}
                                            onChange={this.handleOnchange} />
                                        Grafica de Radar</label>
                                </div>
                                :
                                <Fragment>
                                    <div className="form-group mr-3">
                                        <label htmlFor="id_line">
                                            <input
                                                type="radio"
                                                value='L'
                                                className='form-control'
                                                id='id_line'
                                                checked={selectA === 'L'}
                                                onChange={this.handleOnchange} />
                                            Grafica de Linea</label>
                                    </div>
                                    <div className="form-group mr-3">
                                        <label htmlFor="id_doughnut">
                                            <input
                                                type="radio"
                                                value='D'
                                                className='form-control'
                                                id='id_doughnut'
                                                checked={selectA === 'D'}
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
                                                checked={selectA === 'B'}
                                                onChange={this.handleOnchange} />
                                            Grafica de Barra</label>
                                    </div>

                                </Fragment>}

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
    isBidimensional: state.clima.multiData.isBidimensional,
    info: state.charts.infoData
})
export default connect(mapStateToProps, { resetChartData, getChartDataClima })(DepartamentoChart);
