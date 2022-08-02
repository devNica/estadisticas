import { httpHandler } from '../../handlers'
import { constants } from '../../config'

const { ROUTES_PREFIX, HTTP } = constants

const testRouter = {
    info: async () => await httpHandler(HTTP.GET, `${ROUTES_PREFIX}/test`)
}


export {
    testRouter
}