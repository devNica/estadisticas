import { api } from './api'
import express from 'express'
import { constants, sequelize } from './config'
import loader from './loaders/index'

function startServer() {
    const app = express()
    loader.init({
        expressApp: app,
        expressRoutes: api(),
        sequelizeConfig: sequelize
    })

    app.listen(constants.SERVER_PORT, (err)=>{
        if(err) console.error(err)
        console.log(`Server is running on port ${constants.SERVER_PORT}`)
    })  
}

startServer()