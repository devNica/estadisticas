import geoService from "../services/geo.service"


const geoController = {}

geoController.fetchAllZones = async (req, res, next) => {
    try {
      const { meta, msg } = await geoService.fetchAllZones()
      res.json({ meta, msg })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
}

geoController.fetchZoneById = async (req, res, next) => {
    try {
      const { meta, msg } = await geoService.fetchZoneById(req.params.id)
      res.json({ meta, msg })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
}

geoController.fetchAllDepartamentsByZone = async (req, res, next) => {
    try {
      const { meta, msg } = await geoService.fetchAllDepartamentsByZone(req.params.id)
      res.json({ meta, msg })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
}

geoController.fetchAllMunicipalitiesByZone = async (req, res, next) => {
    try {
      const { meta, msg } = await geoService.fetchAllMunicipalitiesByZone(req.params.id)
      res.json({ meta, msg })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
}

export default geoController