import { DepartamentoModel, MunicipioModel, ZonaModel } from "../models"


export async function sequelizeLoader(sequelizeInstance = null) {
    if (!sequelizeInstance) return
    
    // ASSOCIATIONS
    
    //DEPARTAMENTO MODEL
    DepartamentoModel.belongsTo(ZonaModel, { foreignKey: 'fk_zona' })
    DepartamentoModel.hasMany(MunicipioModel, { foreignKey: 'fk_departamento', onDelete: 'RESTRICT' })
    
    //MUNICIPIO MODEL
    MunicipioModel.belongsTo(DepartamentoModel, { foreignKey: 'fk_departamento' })

    //ZONA MODEL
    ZonaModel.hasMany(DepartamentoModel, { foreignKey: 'fk_zona', onDelete: 'RESTRICT' })


    await sequelizeInstance.sync({ alter: true})
    .then(()=> {
        console.log('all models has been created')
    })
    .catch(err => console.error(err))
}