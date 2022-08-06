import { combineReducers } from 'redux'
import {  geographicReducer as geo } from './geographic'
import { chartReducer as charts } from './charts'


export default combineReducers({
    geo,
    charts
})