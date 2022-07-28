import express from 'express'
import pkg from '../../../package.json'

const testRouter = express.Router()
const app = express()
app.set('pkg', pkg)

testRouter.get('/', (_req, res)=>{
    const info = {
        proyect: app.get('pkg').name,
        description: app.get('pkg').description,
        author: app.get('pkg').author
    }

    res.json(info)
})

export default testRouter