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
        default:
            return state;
    }
}