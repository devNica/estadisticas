import { combineReducers } from 'redux'
import geo from './geo'
import charts from './charts'
import clima from './clima'

export default combineReducers({
    geo,
    charts,
    clima,
})