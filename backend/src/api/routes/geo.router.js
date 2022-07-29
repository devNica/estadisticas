import { Router } from 'express'
import geoController from '../../controllers/geo.controller'

const geoRouter = Router()

geoRouter.get('/zones', geoController.fetchAllZones)
geoRouter.get('/zones/:id', geoController.fetchZoneById)
geoRouter.get('/zones/:id/departaments', geoController.fetchAllDepartamentsByZone)
geoRouter.get('/zones/:id/municipalities', geoController.fetchAllMunicipalitiesByZone)

export default geoRouter