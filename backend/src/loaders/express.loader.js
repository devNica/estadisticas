import { json, urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

export async function expressLoader(app, routes=[]){
    if( !app || !Array.isArray(routes) ) {
        return
    }

    app.use(json())
    app.use(urlencoded({ extended: false }))
    app.use(cors({ origin: '*' }))
    app.use(helmet())
    app.use(morgan('dev'))

    routes.forEach(r =>{
        app.use(r.path, r.controller)
    })

    app.use('/', (_req, res)=>{
        const error = new Error('Internal Server Error')
        res.json({ message: error.message })
    })
}