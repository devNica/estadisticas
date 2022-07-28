import constantsConfig from '../config/constants.config'
import testRouter from './routes/test.router'

export const api = () => {
    return [
        { path: `${constantsConfig.PREFIX}/test`, controller: testRouter}
    ]    
}