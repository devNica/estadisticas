import CustomDataTable from '../../components/DataTable/CustomDataTable'
import './zones.css'

const ZonesPage = () => {
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
                  <CustomDataTable/>
                </div>
                <div className="card-footer">
                    <span className='disclaimer'>****Informacion recopilada del anuario estadistico INIDE***</span>
                </div>
            </div>
        </div>
        
    )
}

export default ZonesPage