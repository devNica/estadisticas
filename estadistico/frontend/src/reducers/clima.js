import { GET_PRECIPITACIONES, GET_PRECIPITACION_DEPARTAMENTO } from '../actions/types'

const initialState = {
    precipitaciones: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRECIPITACIONES:
            return {
                ...state,
                precipitaciones: action.payload
            }
        case GET_PRECIPITACION_DEPARTAMENTO:
            return {
                ...state,
                precipitaciones: action.payload
            }
        default:
            return {
                ...state
            }
    }
}