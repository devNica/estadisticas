import {
    GET_ZONAS,
    GET_DEPARTAMENTOS,
    GET_DEPARTAMENTO,
    RESET_DEPARTAMENTOS,
    RESET_DEPARTAMENTO,
    GET_MUNICIPIOS,
    GET_MUNICIPIO,
    GET_CHARTDATA,

} from '../actions/types'

const initialState = {
    zonas: [],
    departamentos: [],
    municipios: [],
    departamento: []
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

        case GET_DEPARTAMENTO:
            return {
                ...state,
                departamento: action.payload
            }
        case RESET_DEPARTAMENTOS:
            return {
                ...state,
                departamentos: []
            }
        case RESET_DEPARTAMENTO:
            return {
                ...state,
                departamento: []
            }

        default:
            return state;
    }
}