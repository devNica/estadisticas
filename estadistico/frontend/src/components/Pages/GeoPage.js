import React, { Component, Fragment } from 'react';
import GeoTarget from '../Target/GeoTarget'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getZonas } from '../../actions/geo'

class GeoPage extends Component {

    static propTypes = {
        zonas: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getZonas()
    }

    render() {
        return (

            <Fragment>

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <div className="card">
                        <div className="card-header">
                            Informacion Geografica por Zonas
                    </div>
                    </div>
                </div>
                <div className="row">
                    {this.props.zonas.map((zona) => (
                        <GeoTarget title={zona.nombre} key={zona.id} extension={zona.extension} id={zona.id} />
                    ))}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    zonas: state.geo.zonas
})

export default connect(mapStateToProps, { getZonas })(GeoPage);