import React, { Component, Fragment } from 'react';
import GeoTarget from '../Target/GeoTarget'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getZonas } from '../../actions/geo'
import ZonaChart from '../Charts/Geo/ZonaChart';


class GeoPage extends Component {

    static propTypes = {
        zonas: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getZonas()

    }

    render() {

        const { zonas } = this.props;

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
                    {zonas.map((zona) => (
                        <GeoTarget title={zona.nombre} key={zona.id} extension={zona.extension} id={zona.id} />
                    ))}
                </div>

                <ZonaChart />

            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    zonas: state.geo.zonas
})

export default connect(mapStateToProps, { getZonas })(GeoPage);