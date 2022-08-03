import CustomDataTable from '../../components/DataTable/CustomDataTable'
import { connect } from 'react-redux'
import { fetchZones } from '../../redux/actions/geographic'
import { useCallback, useEffect } from 'react'
import './zones.css'

const actionRedux = {
    fetchZones
}

const ZonesPage = ({ fetchZones }) => {

    const fetchZonesFromRedux = useCallback(async()=>{
        await fetchZones()
    }, [fetchZones])


    useEffect(()=>{
        fetchZonesFromRedux()
    }, [fetchZonesFromRedux])

    return(
        <div className='zones_pages'>
            <div className="row">
                <h2 className='zones_pages_title'>Seccion de Informacion de Zonas Geograficas</h2>
            </div>
            
            <div className="card mx-1 mt-3">
                <div className="card-header">
                   <span className='zones_pages_subtitle'>Lista de Zonas geograficas de Nicaragua</span>   
                </div>
                <div className="card-body">
                  <CustomDataTable strategy={'ZONES'}/>
                </div>
                <div className="card-footer">
                    <span className='disclaimer'>****Informacion recopilada del anuario estadistico INIDE***</span>
                </div>
            </div>
        </div>
        
    )
}

export default connect(null, actionRedux)(ZonesPage)