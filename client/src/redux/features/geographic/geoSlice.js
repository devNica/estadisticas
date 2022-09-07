import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    zones: []
}

export const geographicSlice = createSlice({
    name: 'geo',
    initialState,
    reducers: {
        setZones: (state, action) => {
            state.zones = action.payload
        }
    }
})

export const { setZones } = geographicSlice.actions
export default geographicSlice.reducer