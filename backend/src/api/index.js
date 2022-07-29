import { constants} from '../config/index'
import geoRouter from './routes/geo.router'
import testRouter from './routes/test.router'

export const api = () => {
    return [
        { path: `${constants.PREFIX}/test`, controller: testRouter},
        { path: `${constants.PREFIX}/geo`, controller: geoRouter}
    ]    
}