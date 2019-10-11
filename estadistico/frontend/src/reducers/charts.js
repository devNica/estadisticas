import { GET_CHARTDATA, RESET_CHARTDATA } from '../actions/types'

const initialState = {
    infoData: {
        labels: [],
        data: [],
        color: [],
        title: '',
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CHARTDATA:
            return {
                ...state,
                infoData: action.payload
            }
        case RESET_CHARTDATA:
            return {
                infoData: action.payload
            }



        default:
            return {
                ...state
            }
    }
}