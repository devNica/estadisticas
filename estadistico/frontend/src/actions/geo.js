import {
    GET_ZONAS,
    GET_DEPARTAMENTOS,
    GET_DEPARTAMENTO,
    GET_MUNICIPIO,
    GET_MUNICIPIOS,
} from './types'

import axios from 'axios'


export const getZonas = () => (dispatch) => {
    axios.get('geo/api/zona/list')
        .then(res => {
            dispatch({
                type: GET_ZONAS,
                payload: res.data,
            })
        })
        .catch(err => console.log(err))


    // axios.get('geo/api/municipio/list')
    //     .then(res => {
    //         dispatch({
    //             type: GET_MUNICIPIOS,
    //             payload: res.data,
    //         })
    //     })
    //     .catch(err => console.log(err))


}