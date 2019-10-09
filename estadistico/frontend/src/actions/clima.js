import { GET_PRECIPITACIONES, GET_PRECIPITACION_DEPARTAMENTO } from './types'
import axios from 'axios'

export const getPrecipitaciones = () => dispatch => {

    axios.get('/api/clima/precipitacion/departamento')
        .then(res => {

            // const resultado = res.data[0].precipitacion.filter(precipitacion => precipitacion.municipio === 'Corinto')
            const arreglo = res.data
            let resultado = []
            let x = []

            if (arreglo !== undefined || arreglo !== null) {

                for (let i = 0; i < arreglo.length; i++) {

                    if (arreglo[i].nombre === 'Leon') {
                        resultado[i] = arreglo[i].precipitacion
                        //resultado = [...arreglo[i].precipitacion, resultado]
                    }
                }
            }

            x = [...resultado[1]]
            console.log(x)

            dispatch({
                type: GET_PRECIPITACIONES,
                payload: x,
            })

        })
        .catch(err => console.log(err))
}

export const getPrecipitacionDepartamento = () => dispatch => {
    axios.get('/api/clima/precipitacion/departamento/1')
        .then(res => {

            dispatch({
                type: GET_PRECIPITACION_DEPARTAMENTO,
                payload: res.data
            })

        })
        .catch(err => console.log(err))
}