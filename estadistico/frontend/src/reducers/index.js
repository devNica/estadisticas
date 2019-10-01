import { combineReducers } from 'redux'
import geo from './geo'
import charts from './charts'

export default combineReducers({
    geo,
    charts,
})