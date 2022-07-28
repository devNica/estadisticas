import { expressLoader } from "./express.loader"
import { sequelizeLoader } from "./sequelize.loader"

export default {
    init: async({ expressApp=null, expressRoutes=null, sequelizeConfig=null })=>{
        await sequelizeLoader(sequelizeConfig)
        await expressLoader(expressApp, expressRoutes)
    }
}