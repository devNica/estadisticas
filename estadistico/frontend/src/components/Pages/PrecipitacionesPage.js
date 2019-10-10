import React, { Component } from 'react';
import NicaraguaMap from '../Maps/NicaraguaMap'
import { connect } from 'react-redux'
import { resetGeoData } from '../../actions/clima'
class PrecipitacionesPage extends Component {

    componentDidMount() {
        this.props.resetGeoData()
    }

    render() {
        return (
            <div>
                <NicaraguaMap />
            </div>
        );
    }
}

export default connect(null, { resetGeoData })(PrecipitacionesPage);