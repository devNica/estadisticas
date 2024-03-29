import React from 'react';
import { Pie as Grafico } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { connect } from 'react-redux'


ChartJS.register(ArcElement, Tooltip, Legend)

const Piechart = ({ labels, data, backgroundColor, ratio }) => {
    return (
        <div>
            {data ?
                <Grafico
                    data={{

                        labels,
                        datasets: [
                            {
                                label: 'Extension',
                                data,
                                backgroundColor,
                            }
                        ]

                    }}

                    options={{
                        maintainAspectRatio: false,
                    }}
                /> : null

            }

        </div>
    );
};

const mapStateToProps = state => ({
    labels: state.charts.infoData.labels,
    data: state.charts.infoData.data,
    backgroundColor: state.charts.infoData.color,

})

export default connect(mapStateToProps)(Piechart);