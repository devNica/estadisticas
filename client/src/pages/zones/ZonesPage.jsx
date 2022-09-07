import React from 'react'
import { useCallback, useEffect } from 'react'
import CustomDataTable from '../../components/DataTable/CustomDataTable'
import { geoRouter } from '../../services/api/api.service'
import { useDispatch } from 'react-redux'
import { setZones } from '../../redux/features/geographic/geoSlice'
import ZonasChart from '../../components/charts/geo/ZonasChart'
import { serializeToDataModel } from '../../helpers/serializerData'
import { ZoneModel } from '../../models'
import './zones.css'


const ZonesPage = () => {

    const dispatch = useDispatch()

    const fetchZonesFromAPI = useCallback(async () => {
        const response = await geoRouter.fetchZones()
        const zonas = serializeToDataModel(ZoneModel, response.meta.zonas)
        dispatch(setZones(zonas))
    }, [dispatch])


    useEffect(() => {
        fetchZonesFromAPI()
    }, [fetchZonesFromAPI])

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

export default ZonesPage