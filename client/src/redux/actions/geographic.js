import { FETCH_ZONES } from './types'
import { geoRouter } from '../../services/api/api.service'
import { serializeToDataModel  } from '../../helpers/serializerData'
import { ZoneModel } from '../../models'

export const fetchZones = () => (dispatch) =>{
    
    geoRouter.fetchZones().then(response=>{

        const zonas = serializeToDataModel(ZoneModel, response.meta.zonas)

        dispatch({
            type: FETCH_ZONES,
            payload: zonas
        })
    }).catch(err=> console.error(err))
    
}