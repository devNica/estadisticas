import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPrecipitaciones, getPrecipitacionDepartamento } from '../../actions/clima'
import NicaraguaMap from '../Maps/NicaraguaMap'

class PrecipitacionesPage extends Component {

    componentDidMount() {
        this.props.getPrecipitacionDepartamento()
    }

    render() {
        return (
            <div>
                <NicaraguaMap />
            </div>
        );
    }
}

export default connect(null, { getPrecipitaciones, getPrecipitacionDepartamento })(PrecipitacionesPage);