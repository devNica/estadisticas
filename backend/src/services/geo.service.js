import { DepartamentoModel, MunicipioModel, UnidadesModel, ZonaModel } from "../models"
import { sequelize as db } from "../config"
import { fetchAllMunicipalitiesByZoneQuery } from "../queries/geo.queries"
import { QueryTypes } from 'sequelize'
import { isObjEmpty, serializeResponseORM } from '../helpers/object.helper'

const geoService = {}

geoService.fetchAllZones = async function (){
    try {
        const zonas = await ZonaModel.findAll({
            attributes: [['id','zona_id'],'nombre','extension','created_at','is_active'],
            include: {
                model: UnidadesModel,
                attributes: [['id', 'und_id'], 'unidad']
            }
        })
        return { meta: {status: true, zonas }, msg: 'request processed successfully' }
    } catch (error) {
        throw new Error(`request cannot be processed: ${error.message}`)
    }
}

geoService.fetchZoneById = async function(id) {
    try {
        const zoneId = parseInt(id)
        if (!zoneId) throw new Error('Param Id wrong')
        const zona = await ZonaModel.findByPk(zoneId,{
            attributes: [['id','zona_id'],'nombre','extension','created_at','is_active'],
            include: {
                model: UnidadesModel,
                attributes: [['id', 'und_id'], 'unidad']
            }
        })
        return { meta: {status: true, zona: zona || {} }, msg: 'request processed successfully' }
    } catch (error) {
        throw new Error(`request cannot be processed: ${error.message}`)
    }
}

geoService.fetchAllDepartamentsByZone = async function(id){
    try {
        const zoneId = parseInt(id)
        if (!zoneId) throw new Error('Param Id wrong')
        const zona = await ZonaModel.findByPk(zoneId,{
            attributes: [['id','zona_id'],'nombre','extension','created_at','is_active'],
            include: [
                { 
                    model: UnidadesModel,
                    attributes: [['id', 'und_id'], 'unidad']
                },
                { 
                    model: DepartamentoModel,
                    attributes: [['id', 'depto_id'], 'nombre', 'extension', 'created_at', 'is_active'],
                    include:  { 
                        model: UnidadesModel,
                        attributes: [['id', 'und_id'], 'unidad']
                    },
                }
            ]
        })
        return { meta: {status: true, zona: zona || {} }, msg: 'request processed successfully' }
    } catch (error) {
        throw new Error(`request cannot be processed: ${error.message}`)
    }
}

geoService.fetchAllMunicipalitiesByZone = async function(id){
    try {
        const zoneId = parseInt(id)
        if (!zoneId) throw new Error('Param Id wrong')
        const responseORM = await ZonaModel.findByPk(zoneId,{
            attributes: [['id','zona_id'],'nombre','extension','created_at','is_active'],
        })

        const municipios = await db.query(fetchAllMunicipalitiesByZoneQuery(),
        {
            replacements: { zoneId },
            raw: true,
            plain: false,
            type: QueryTypes.SELECT
        })

        let zona = {}

        if(!isObjEmpty(responseORM)) {
            zona = serializeResponseORM(responseORM)
            zona.municipios = municipios
        }
        

        return { meta: {status: true, zona: zona || {} }, msg: 'request processed successfully' }
    } catch (error) {
        throw new Error(`request cannot be processed: ${error.message}`)
    }
}

export default geoService