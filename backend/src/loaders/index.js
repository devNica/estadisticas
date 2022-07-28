import { expressLoader } from "./express.loader"

export default {
    init: async({ expressApp=null, expressRoutes=null })=>{
        await expressLoader(expressApp, expressRoutes)
    }
}