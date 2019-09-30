import React, { Component } from 'react';
import { connect } from 'react-redux'
class Departamento extends Component {
    render() {
        return (
            <div>
                <h2>desde departamentos</h2>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    departamentos: state.geo
})

export default connect(mapStateToProps)(Departamento);