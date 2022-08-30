import React from 'react'
import CustomDataTable from '../../components/DataTable/CustomDataTable'
import { connect } from 'react-redux'
import { fetchZones } from '../../redux/actions/geographic'
import { useCallback, useEffect } from 'react'
import ZonasChart from '../../components/charts/geo/ZonasChart'
import './zones.css'

const actionRedux = {
    fetchZones
}

const ZonesPage = ({ fetchZones }) => {

    const fetchZonesFromRedux = useCallback(async () => {
        await fetchZones()
    }, [fetchZones])


    useEffect(() => {
        fetchZonesFromRedux()
    }, [fetchZonesFromRedux])

    return (
        <div className='zones_page'>
            <div className="zones_page_title">
                <h2>Seccion de Informacion de Zonas Geograficas</h2>
            </div>

            <div className="page_container">
                <div className="top">
                    <CustomDataTable strategy={'ZONES'} />
                </div>
                <div className="bottom">
                    <ZonasChart />
                </div>
            </div>
        </div>

    )
}

export default connect(null, actionRedux)(ZonesPage)