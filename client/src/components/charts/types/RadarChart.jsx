import React from 'react';
import { Radar as Grafico } from 'react-chartjs-2'
import { connect } from 'react-redux'

const RadarChart = ({ labels, data, ratio, title }) => {
    return (
        <div>
            {data[0] && data[1] ?
                <Grafico
                    data={{
                        labels, //['Enero', 'Febrero', ... 'Diciembre']
                        datasets: [
                            {
                                label: title[0], //Nombre del Grafico
                                backgroundColor: 'rgba(40,168,140,0.2)',
                                borderColor: 'rgba(40,168,140,1)',
                                pointBackgroundColor: 'rgba(255,186,20,1)',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgba(179,181,198,1)',
                                data: data[0],
                            },
                            {
                                label: title[1], //Nombre del Grafico
                                backgroundColor: 'rgba(50,219,238,0.2)',
                                borderColor: 'rgba(50,219,238,1)',
                                pointBackgroundColor: 'rgba(255,99,132,1)',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgba(255,99,132,1)',
                                data: data[1],
                            }
                        ]


                    }}
                    options={{
                        maintainAspectRatio: ratio
                    }}

                />

                : null}
        </div>
    );
};

const mapStateToProps = state => ({
    labels: state.charts.infoData.labels,
    data: state.charts.infoData.data,
    title: state.charts.infoData.title
})

export default connect(mapStateToProps)(RadarChart);