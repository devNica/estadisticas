import { constants} from '../config/index'
import testRouter from './routes/test.router'

export const api = () => {
    return [
        { path: `${constants.PREFIX}/test`, controller: testRouter}
    ]    
}