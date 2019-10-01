import { GET_CHARTDATA } from '../actions/types'

const initialState = {
    infoData: {
        labels: [],
        data: []
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CHARTDATA:
            return {
                ...state,
                infoData: action.payload
            }
        default:
            return {
                ...state
            }
    }
}