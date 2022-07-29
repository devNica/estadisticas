export const fetchAllMunicipalitiesByZoneQuery = () => `
SELECT 

mcpo.id as mcpo_id,
mcpo.nombre,
mcpo.extension,
mcpo.latitud_norte,
mcpo.longitud_oeste,
mcpo.msm,
mcpo.is_active,
und.unidad

FROM zona as zn 
LEFT JOIN departamento as depto ON depto.fk_zona = zn.id
LEFT JOIN municipio as mcpo on mcpo.fk_departamento = depto.id
LEFT JOIN unidad as und on und.id = mcpo.fk_unidad
WHERE zn.id = :zoneId
`