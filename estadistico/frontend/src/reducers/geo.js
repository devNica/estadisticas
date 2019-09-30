import {
    GET_ZONAS,
    GET_DEPARTAMENTOS,
    GET_DEPARTAMENTO,
    GET_MUNICIPIOS,
    GET_MUNICIPIO,
} from '../actions/types'

const initialState = {
    zonas: [],
    departamentos: [],
    municipios: [],
}

export default function (state = initialState, action) {
    switch (action.type) {

        case GET_ZONAS:
            return {
                ...state,
                zonas: action.payload
            }

        case GET_MUNICIPIOS:
            return {
                ...state,
                municipios: action.payload
            }

        case GET_DEPARTAMENTOS:
            return {
                ...state,
                departamentos: action.payload
            }

        default:
            return state;
    }
}