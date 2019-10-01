import {
    GET_ZONAS,
    GET_DEPARTAMENTOS,
    GET_DEPARTAMENTO,
    GET_MUNICIPIO,
    GET_MUNICIPIOS,
    GET_CHARTDATA
} from './types'

import axios from 'axios'


export const getZonas = () => (dispatch) => {
    axios.get('geo/api/zona/list')
        .then(res => {
            dispatch({
                type: GET_ZONAS,
                payload: res.data,
            })

            let label = {}
            let ext = {}
            for (var i = 0; i < res.data.length; ++i) {
                label[i] = res.data[i].nombre;
                ext[i] = parseFloat(res.data[i].extension);
            }


            const labels = Object.values(label)
            const data = Object.values(ext)

        })
        .catch(err => console.log(err))


}

