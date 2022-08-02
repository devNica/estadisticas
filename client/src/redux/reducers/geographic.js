import { FETCH_ZONES } from "../actions/types";

const initialSatte = {
    zones: []
}

export const geographicReducer = (state = initialSatte, action) => {
    switch (action.type) {
        case FETCH_ZONES:
            return {
                ...state,
                zones: action.payload
            }
        default:
            return { ...state }
    }
}