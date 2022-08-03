import { httpHandler } from '../../handlers'
import { constants } from '../../config'

const { ROUTES_PREFIX, HTTP } = constants

const testRouter = {
    info: async () => await httpHandler(HTTP.GET, `${ROUTES_PREFIX}/test`)
}

const geoRouter = {
    fetchZones: async () => httpHandler(HTTP.GET, `${ROUTES_PREFIX}/geo/zones`)
}


export {
    testRouter,
    geoRouter
}