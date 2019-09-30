import React, { Component } from 'react';
import { getZonas } from '../../actions/geo';
import { connect } from 'react-redux'
class Geo extends Component {

    componentDidMount() {
        this.props.getZonas()
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default connect(null, { getZonas })(Geo);