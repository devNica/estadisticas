import React from 'react';
import { Bar as Grafico } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'
import { connect } from 'react-redux'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const BarChart = ({ data, labels, backgroundColor, ratio, title }) => {

    return (

        <div>
            {data ?
                <Grafico
                    data={{

                        labels,
                        datasets: [
                            {
                                label: title[0],
                                data,
                                backgroundColor,
                            }
                        ]

                    }}

                    options={{
                        maintainAspectRatio: ratio
                    }}
                /> : null
            }
        </div>
    );


}

const mapStateToProps = state => ({
    labels: state.charts.infoData.labels,
    data: state.charts.infoData.data,
    backgroundColor: state.charts.infoData.color,
    title: state.charts.infoData.title,
})

export default connect(mapStateToProps)(BarChart);