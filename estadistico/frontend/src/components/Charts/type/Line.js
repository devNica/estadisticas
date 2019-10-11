import React, { Component } from 'react';
import { Line as Grafico } from 'react-chartjs-2'
import { connect } from 'react-redux'

class Line extends Component {
    render() {

        const { data, labels, backgroundColor, ratio, title } = this.props

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
}

const mapStateToProps = state => ({
    labels: state.charts.infoData.labels,
    data: state.charts.infoData.data,
    backgroundColor: state.charts.infoData.color,
    title: state.charts.infoData.title,
})

export default connect(mapStateToProps)(Line);