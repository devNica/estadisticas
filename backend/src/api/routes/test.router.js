import express from 'express'
import pkg from '../../../package.json'
import dataMigrations from '../../migrations/data-migrations'

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

testRouter.get('/run-migration', async(req, res)=>{
    try {
        const response = await dataMigrations.runMigration()
        res.json({ response })
    } catch (error) {
        res.json({ message: error.message })
    }
})

export default testRouter