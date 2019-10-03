import React, { Component } from 'react';
import { Bar as Grafico } from 'react-chartjs-2'
import { connect } from 'react-redux'
class Bar extends Component {


    render() {

        const { data, labels, backgroundColor, ratio } = this.props

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
                            maintainAspectRatio: ratio
                        }}
                    /> : null

                }

            </div>
        );
    }

}

const mapStateToProps = state => ({
    labels: state.charts.infoData.labels,
    data: state.charts.infoData.data,
    backgroundColor: state.charts.infoData.color,
    // ratio: state.charts.infoData.ratio,

})

export default connect(mapStateToProps)(Bar);