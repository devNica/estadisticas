import { DepartamentoModel, MunicipioModel, PeriodoModel, PoblacionDepartamentalGnral, PoblacionDepartamentalSeg, SegmentoPoblacionalModel, ZonaModel } from "../models"


export async function sequelizeLoader(sequelizeInstance = null) {
    if (!sequelizeInstance) return
    
    // ASSOCIATIONS
    
    //DEPARTAMENTO MODEL
    DepartamentoModel.belongsTo(ZonaModel, { foreignKey: 'fk_zona' })
    DepartamentoModel.hasMany(MunicipioModel, { foreignKey: 'fk_departamento', onDelete: 'RESTRICT' })
    DepartamentoModel.hasMany(PoblacionDepartamentalGnral, { foreignKey: 'fk_departamento', onDelete: 'RESTRICT' })
    DepartamentoModel.hasMany(PoblacionDepartamentalSeg, { foreignKey: 'fk_departamento', onDelete: 'RESTRICT' })
    
    //MUNICIPIO MODEL
    MunicipioModel.belongsTo(DepartamentoModel, { foreignKey: 'fk_departamento' })

    //PERIOODO MODEL
    PeriodoModel.hasMany(PoblacionDepartamentalGnral, { foreignKey: 'fk_periodo', onDelete: 'RESTRICT'})
    PeriodoModel.hasMany(PoblacionDepartamentalSeg, { foreignKey: 'fk_periodo', onDelete: 'RESTRICT'})
    
    // POBLACION DEPARTAMENTAL GENERAL
    PoblacionDepartamentalGnral.belongsTo(DepartamentoModel, { foreignKey: 'fk_departamento' })
    PoblacionDepartamentalGnral.belongsTo(PeriodoModel, { foreignKey: 'fk_periodo' })

    // POBLACION DEPARTAMENTAL POR SEGMENTO POBLACIONAL
    PoblacionDepartamentalSeg.belongsTo(DepartamentoModel, { foreignKey: 'fk_departamento' })
    PoblacionDepartamentalSeg.belongsTo(PeriodoModel, { foreignKey: "fk_periodo" })
    PoblacionDepartamentalSeg.belongsTo(SegmentoPoblacionalModel, { foreignKey: 'fk_segmento' })

    // SEHMENTO POBLACIONAL MODEL
    SegmentoPoblacionalModel.hasMany(PoblacionDepartamentalSeg, { foreignKey: "fk_segmento" })

    //ZONA MODEL
    ZonaModel.hasMany(DepartamentoModel, { foreignKey: 'fk_zona', onDelete: 'RESTRICT' })


    // await sequelizeInstance.sync({ alter: false})
    // .then(()=> {
    //     console.log('all models has been created')
    // })
    // .catch(err => console.error(err))
}