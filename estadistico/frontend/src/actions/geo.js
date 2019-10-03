import {
    GET_ZONAS,
    GET_DEPARTAMENTOS,
    GET_DEPARTAMENTO,
    RESET_DEPARTAMENTOS,
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

    dispatch({
        type: RESET_DEPARTAMENTOS,

    })

    axios.get('/api/geo/departamento/list')
        .then(res => {
            dispatch({
                type: GET_DEPARTAMENTOS,
                payload: res.data,
            })

        })
        .catch(err => console.log(err))


}


export const getDepartamento = (pk) => (dispatch) => {
    axios.get(`/api/geo/departamento/${pk}`)
        .then(res => {
            dispatch({
                type: GET_DEPARTAMENTO,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const resetDepartamentos = () => (dispatch) => {
    dispatch({
        type: RESET_DEPARTAMENTOS,

    })
}

