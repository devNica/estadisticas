import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getChartData, resetChartData } from '../../../redux/actions/charts'
import Bar from '../types/BarChart'
import Pie from '../types/PieChart'
import Doughnut from '../types/DoughnutChart'
import './geo.css'

const mapStateToProps = state => ({
    zonas: state.geo.zones,
})

const reduxActions = { getChartData, resetChartData }


const ZonasChart = ({ getChartData, resetChartData, zonas }) => {

    const [selectedOption, setSelectedOption] = useState('P')

    const handleOnClick = e => {
        getChartData('zonas')
    }

    useEffect(() => {
        return (() => {
            resetChartData()
        })
    }, [resetChartData])


    return (
        <div>
            {zonas !== undefined ?

                <div className="charts">
                    <div className='selected-chart'>
                        {
                            selectedOption === 'P' ? <Pie ratio={false} /> :
                                selectedOption === 'B' ? <Bar ratio={false} /> :
                                    selectedOption === 'D' ? <Doughnut ratio={false} /> : null}
                    </div>

                    <section className='options_container'>
                        <div className="option_group">
                            <input type="radio" name='pie' value='P' id='pie' checked={selectedOption === 'P'} onChange={(e) => setSelectedOption(e.target.value)} />
                            <label className='radio' htmlFor='pie'>
                                <span className='radio'>Pie Chart</span>
                            </label>
                        </div>
                        <div className="option_group">
                            <input type="radio" value='D' id='doughnut' checked={selectedOption === 'D'} onChange={(e) => setSelectedOption(e.target.value)} />
                            <label className='radio' htmlFor='doughnut'>
                                <span className='radio'>Doughnut Chart</span>
                            </label>
                        </div>
                        <div className="option_group">
                            <input type="radio" value='B' id='bar' checked={selectedOption === 'B'} onChange={(e) => setSelectedOption(e.target.value)} />
                            <label className="radio" htmlFor='bar'>
                                <span className='radio'>Bar Chart</span>
                            </label>
                        </div>
                        <div className="option_submit">
                            <button type='button' onClick={handleOnClick} className="btn-graph">
                                Graficar
                            </button>
                        </div>
                    </section>
                </div> : null}

        </div >
    );

}

export default connect(mapStateToProps, reduxActions)(ZonasChart);