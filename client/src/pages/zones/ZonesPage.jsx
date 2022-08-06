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
        <div className='zones_pages'>
            <div className="">
                <h2 className='zones_pages_title'>Seccion de Informacion de Zonas Geograficas</h2>
            </div>

            <div className="page_container">
                <div className="left_container">
                    <CustomDataTable strategy={'ZONES'} />
                </div>
                <div className="rigth_container">
                    <ZonasChart />
                </div>
            </div>
        </div>

    )
}

export default connect(null, actionRedux)(ZonesPage)