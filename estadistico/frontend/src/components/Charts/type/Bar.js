import React, { Component } from 'react';
import { Bar as Grafico } from 'react-chartjs-2'
import { connect } from 'react-redux'
class Bar extends Component {


    render() {

        const { data, labels } = this.props

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
                                    backgroundColor: [
                                        'rgba(255,99,132,0.8)',
                                        'rgba(54,162,235,0.8)',
                                        'rgba(255,206,86,0.8)',
                                        'rgba(75,192,192,0.8)',
                                    ]
                                }
                            ]

                        }}

                        options={{
                            maintainAspectRatio: false
                        }}
                    /> : null

                }

            </div>
        );
    }

}

const mapStateToProps = state => ({
    labels: state.charts.infoData.labels,
    data: state.charts.infoData.data

})

export default connect(mapStateToProps)(Bar);