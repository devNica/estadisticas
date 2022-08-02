import { combineReducers } from 'redux'
import {  geographicReducer as geo } from './geographic'


export default combineReducers({
    geo,
})