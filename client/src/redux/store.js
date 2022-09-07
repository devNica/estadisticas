import { configureStore } from '@reduxjs/toolkit'
import geoReducer from './features/geographic/geoSlice'
import chartReducer from './features/charts/chartSlice'

export const store = configureStore({
   reducer: {
    geo: geoReducer,
    charts: chartReducer
   }
})
