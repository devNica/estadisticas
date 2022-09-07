import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    infoData: {
        labels: [],
        data: [],
        color: [],
        title: '',
    }
}

export const chartSlice = createSlice({
    name: 'charts',
    initialState,
    reducers: {
        setChart: (state, action) => {
            state.infoData = action.payload
        }
    }
})


export const { setChart } = chartSlice.actions
export default chartSlice.reducer