import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setChart } from '../../../redux/features/charts/chartSlice';
import Bar from '../types/BarChart'
import Pie from '../types/PieChart'
import Doughnut from '../types/DoughnutChart'
import './geo.css'
import { useCallback } from 'react';

const ZonasChart = () => {

    const zonas = useSelector((state)=> state.geo.zones)
    const dispatch = useDispatch()
    const [selectedOption, setSelectedOption] = useState('P')

    const hexToRGBA = (hex, opacity) => {
        hex = hex.replace('#', '');
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
    
        let result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
        return result;
    }

    const handlerChart = async (aux = 'ext') => {
        let arreglo
        let title = []
    
        arreglo = zonas
    
        var letters = '0123456789ABCDEF';
        var color = [];
        let colorHex = '#'
    
        let label = {}
        let ext = {}
        let alt = {}
        let x = {}
    
        //si el tipo de grafico es extension se crea un Array con los datos
        //de la extension territorial de cada municipio 
        if (aux === 'ext') {
    
            for (var i = 0; i < arreglo.length; ++i) {
                label[i] = arreglo[i].nombre;
                ext[i] = parseFloat(arreglo[i].extension);
    
                for (var k = 0; k < 6; k++) {
                    colorHex += letters[Math.floor(Math.random() * 16)];
    
                }
    
                color.push(hexToRGBA(colorHex, 70))
                colorHex = '#'
            }
    
            title[0] = 'extension'
    
            x = {
                labels: Object.values(label),
                data: Object.values(ext),
                color: color,
                title,
    
            }
        }
    
        //si el tipo de grafico es altura se crea un Array con los datos
        // de la altura promedio de cada cabecera municipal
        if (aux === 'alt') {
    
            for (var v = 0; v < arreglo.length; ++v) {
                label[v] = arreglo[v].nombre;
                alt[v] = parseFloat(arreglo[v].msm);
    
                for (var w = 0; w < 6; w++) {
                    colorHex += letters[Math.floor(Math.random() * 16)];
    
                }
    
                color.push(hexToRGBA(colorHex, 60))
                colorHex = '#'
            }
    
            title[0] = 'altura'
            x = {
                labels: Object.values(label),
                data: Object.values(alt),
                color: color,
                title,
    
            }
        }
    
        console.log('CHARDATA: ', x);
        
        dispatch(setChart(x))
        
    }


    const resetChartData = useCallback(()=>{
        const x = {
            labels: [],
            data: [],
            color: [],
            title: ''
        }
        dispatch(setChart(x))
    },[dispatch])

    const handleOnClick = async e => {
        await handlerChart()
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

export default ZonasChart;