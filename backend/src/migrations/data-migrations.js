const fs = require('fs')
import { 
    DepartamentoModel, 
    MunicipioModel,
    UnidadesModel, 
    ZonaModel 
} from "../models"

const jsonToObject = data => 
    new Promise(async(resolve, reject)=>{
        try {
            resolve(await JSON.parse(data))
        } catch (error) {
            reject(error)
        }
})

export default {
    runMigration: async()=>{
        try {
            
            const unidadesJSON = fs.readFileSync('./src/seeds/unidades.seed.json','utf8')
            const zonasJSON = fs.readFileSync('./src/seeds/zonas.seed.json', 'utf8')
            const departamentosJSON = fs.readFileSync('./src/seeds/departamentos.seed.json', 'utf8')
            const municipiosJSON = fs.readFileSync('./src/seeds/municipios.seed.json', 'utf8')

            const unidades = await jsonToObject(unidadesJSON)
            const zonas = await jsonToObject(zonasJSON)
            const departamentos = await jsonToObject(departamentosJSON)
            const municipios = await jsonToObject(municipiosJSON)

            const migrations = [
                { obj: unidades, table: UnidadesModel },
                { obj: zonas, table: ZonaModel },
                { obj: departamentos, table: DepartamentoModel },
                { obj: municipios, table: MunicipioModel }
            ]

            await Promise.all(migrations.map( async data => {
                const model = data.table
                await Promise.all(data.obj.map(async element =>{
                    await model.create(element)
                }))
            }))

            return ({ message: 'successful migration'})


        } catch (error) {
            console.log(error)
            throw new Error('migration failed')
        }
    }
}