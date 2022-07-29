import { DepartamentoModel, MunicipioModel, PeriodoModel, PoblacionDepartamentalGnral, PoblacionDepartamentalSeg, SegmentoPoblacionalModel, UnidadesModel, ZonaModel } from "../models"


export async function sequelizeLoader(sequelizeInstance = null) {
    if (!sequelizeInstance) return
    
    // ASSOCIATIONS
    
    //DEPARTAMENTO MODEL
    DepartamentoModel.belongsTo(ZonaModel, { foreignKey: 'fk_zona' })
    DepartamentoModel.hasMany(MunicipioModel, { foreignKey: 'fk_departamento', onDelete: 'RESTRICT' })
    DepartamentoModel.hasMany(PoblacionDepartamentalGnral, { foreignKey: 'fk_departamento', onDelete: 'RESTRICT' })
    DepartamentoModel.hasMany(PoblacionDepartamentalSeg, { foreignKey: 'fk_departamento', onDelete: 'RESTRICT' })
    DepartamentoModel.belongsTo(UnidadesModel, { foreignKey: 'fk_unidad' })
    
    //MUNICIPIO MODEL
    MunicipioModel.belongsTo(DepartamentoModel, { foreignKey: 'fk_departamento' })
    MunicipioModel.belongsTo(UnidadesModel, { foreignKey: 'fk_unidad' })

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

    // UNIDAD MODEL
    UnidadesModel.hasMany(DepartamentoModel, { foreignKey: 'fk_unidad', onDelete: 'RESTRICT' })
    UnidadesModel.hasMany(MunicipioModel, { foreignKey: 'fk_unidad', onDelete: 'RESTRICT' })
    UnidadesModel.hasMany(ZonaModel, { foreignKey: 'fk_unidad', onDelete: 'RESTRICT' })

    //ZONA MODEL
    ZonaModel.hasMany(DepartamentoModel, { foreignKey: 'fk_zona', onDelete: 'RESTRICT' })
    ZonaModel.belongsTo(UnidadesModel, { foreignKey: "fk_unidad" })


    // await sequelizeInstance.sync({ alter: false})
    // .then(()=> {
    //     console.log('all models has been created')
    // })
    // .catch(err => console.error(err))
}