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
    axios.get('/api/geo/zona/list')
        .then(res => {
            dispatch({
                type: GET_ZONAS,
                payload: res.data,
            })

        })
        .catch(err => console.log(err))


}


export const getDepartamentos = () => (dispatch) => {
    axios.get('/api/geo/departamento/list')
        .then(res => {
            dispatch({
                type: GET_DEPARTAMENTOS,
                payload: res.data,
            })

        })
        .catch(err => console.log(err))


}


