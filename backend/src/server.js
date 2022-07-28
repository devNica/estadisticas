import { api } from './api'
import express from 'express'
import constantsConfig from "./config/constants.config"
import loader from './loaders/index'

function startServer() {
    const app = express()
    loader.init({
        expressApp: app,
        expressRoutes: api()
    })

    app.listen(constantsConfig.SERVER_PORT, (err)=>{
        if(err) console.error(err)
        console.log(`Server is running on port ${constantsConfig.SERVER_PORT}`)
    })  
}

startServer()