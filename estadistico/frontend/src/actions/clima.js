import { GET_PRECIPITACIONES, GET_PRECIPITACION_DEPARTAMENTO, RESET_DEPARTAMENTOS, RESET_DEPARTAMENTO } from './types'
import axios from 'axios'

export const resetGeoData = () => dispatch => {
    dispatch({
        type: RESET_DEPARTAMENTOS
    })

    dispatch({
        type: RESET_DEPARTAMENTO
    })
}

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

export const getPrecipitacionDepartamento = (id) => dispatch => {

    dispatch({
        type: RESET_DEPARTAMENTOS
    })

    axios.get(`/api/clima/precipitacion/departamento/${id}`)
        .then(res => {

            let x = res.data.precipitacion
            let contador = 0;

            let bidimensional = new Array(2)
            let unidimensional = [];
            let isBidimensional = true;

            for (let i = 0; i < (x.length / 12); i++) {

                if (x.length / 12 > 1) {
                    bidimensional[i] = new Array(13)
                }

                for (let j = 0; j <= 12; j++) {

                    if (x.length / 12 > 1) {

                        if (j == 0) {
                            bidimensional[i][0] = x[contador].municipio
                        }
                        else {
                            bidimensional[i][j] = x[contador - (1 + i)].precipitacion

                        }
                    }
                    else {
                        if (j == 0) {
                            unidimensional[0] = x[contador].municipio
                        }
                        else {
                            unidimensional[j] = x[contador - 1].precipitacion
                        }
                    }
                    contador++;

                }

            }

            if (unidimensional.length > 0) {
                isBidimensional = false
            }

            // dispatch({
            //     type: GET_PRECIPITACION_DEPARTAMENTO,
            //     payload: res.data
            // })

            dispatch({
                type: 'GET_2B_ARRAY',
                payload: {
                    UD: unidimensional, BD: bidimensional, nombre: res.data.nombre, isBidimensional
                }
            })

        })
        .catch(err => console.log(err))
}