import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getChartData, resetChartData } from '../../../redux/actions/charts'
import Bar from '../types/BarChart'
import Pie from '../types/PieChart'
import Doughnut from '../types/DoughnutChart'

const mapStateToProps = state => ({
    zonas: state.geo.zones,
})

const reduxActions = { getChartData, resetChartData }


const ZonasChart = ({ getChartData, resetChartData, zonas }) => {

    const [selectedOption, setSelectedOption] = useState('P')

    const handleOnSubmit = e => {
        e.preventDefault()
        getChartData('zonas')
    }

    useEffect(() => {
        return(()=>{
            resetChartData()
        })
    }, [resetChartData])


    return (
        <div>
            { zonas !== undefined ?
            
            <div className="dsdjsk">
                {
                    selectedOption === 'P' ? <Pie ratio={false} /> :
                        selectedOption === 'B' ? <Bar ratio={false} /> :
                            selectedOption === 'D' ? <Doughnut ratio={false} /> : null }


                <div className="">
                    <form className='form-inline' onSubmit={handleOnSubmit}>
                        <div className="form-group mr-3">
                            <label htmlFor="id_pie">
                                <input
                                    type="radio"
                                    value='P'
                                    className='form-control'
                                    id='id_pie'
                                    checked={selectedOption === 'P'}
                                    onChange={(e) => setSelectedOption(e.target.value)} />
                                Pie Chart</label>
                        </div>
                        <div className="form-group mr-3">
                            <label htmlFor="id_doughnut">
                                <input
                                    type="radio"
                                    value='D'
                                    className='form-control'
                                    id='id_doughnut'
                                    checked={selectedOption === 'D'}
                                    onChange={(e) => setSelectedOption(e.target.value)} />
                                Doughnut Chart</label>
                        </div>
                        <div className="form-group mr-3">
                            <label htmlFor="id_bar">
                                <input
                                    type="radio"
                                    value='B'
                                    className='form-control'
                                    id='id_bar'
                                    checked={selectedOption === 'B'}
                                    onChange={(e) => setSelectedOption(e.target.value)} />
                                Bar Chart</label>
                        </div>
                        <div className="form-group">
                            <input type="submit"
                                value='Graficar'
                                className='btn btn-primary text-white'
                            />
                        </div>
                    </form>
                </div>

                
            </div> : null }

        </div >
    );

}

export default connect(mapStateToProps, reduxActions)(ZonasChart);