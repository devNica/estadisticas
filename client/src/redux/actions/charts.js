import {
    GET_CHARTDATA,
    RESET_CHARTDATA,
} from './types'

export const getChartData = (origen, aux = 'ext') => (dispatch, getState) => {

    let arreglo
    let title = []

    if (origen === 'zonas') {
        arreglo = getState().geo.zones
    }
    if (origen === 'departamentos') {
        arreglo = getState().geo.departamentos

    }
    if (origen === 'municipios') {
        arreglo = getState().geo.departamento.municipio
    }


    console.log('arreglo: ', getState().geo.zones)

    var letters = '0123456789ABCDEF';
    var color = [];
    let colorHex = '#'

    let label = {}
    let ext = {}
    let alt = {}
    let x = {}

    //si el tipo de grafico es extension se crea un Array con los datos
    //de la extension territorial de cada municipio 
    if (aux === 'ext') {

        for (var i = 0; i < arreglo.length; ++i) {
            label[i] = arreglo[i].nombre;
            ext[i] = parseFloat(arreglo[i].extension);

            for (var k = 0; k < 6; k++) {
                colorHex += letters[Math.floor(Math.random() * 16)];

            }

            color.push(hexToRGBA(colorHex, 70))
            colorHex = '#'
        }

        title[0] = 'extension'

        x = {
            labels: Object.values(label),
            data: Object.values(ext),
            color: color,
            title,

        }
    }

    //si el tipo de grafico es altura se crea un Array con los datos
    // de la altura promedio de cada cabecera municipal
    if (aux === 'alt') {

        for (var i = 0; i < arreglo.length; ++i) {
            label[i] = arreglo[i].nombre;
            alt[i] = parseFloat(arreglo[i].msm);

            for (var k = 0; k < 6; k++) {
                colorHex += letters[Math.floor(Math.random() * 16)];

            }

            color.push(hexToRGBA(colorHex, 60))
            colorHex = '#'
        }

        title[0] = 'altura'
        x = {
            labels: Object.values(label),
            data: Object.values(alt),
            color: color,
            title,

        }
    }

    console.log('CHARDATA: ', x);

    dispatch({
        type: GET_CHARTDATA,
        payload: x,
    })
}


export const hexToRGBA = (hex, opacity) => {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    let result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    return result;
}

export const getChartDataClima = () => (dispatch, getState) => {

    let arreglo = getState().clima.multiData
    let data = []
    let color = []
    let title = []
    var letters = '0123456789ABCDEF';
    let labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
        'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
        'Noviembre', 'Diciembre']

    let colorHex = '#'



    if (arreglo.UD !== undefined && arreglo.UD.length > 0) {
        let ud = arreglo.UD;

        for (let index = 1; index <= 12; index++) {
            data[index - 1] = ud[index]

            for (var k = 0; k < 6; k++) {
                colorHex += letters[Math.floor(Math.random() * 16)];

            }

            color.push(hexToRGBA(colorHex, 70))
            colorHex = '#'

        }

        let x = {
            labels,
            data,
            color,
            title: [ud[0]]
        }

        dispatch({
            type: GET_CHARTDATA,
            payload: x
        })

    } else {


        let bd = arreglo.BD


        if (bd[0] && bd[1] !== null) {

            let data1 = []
            let data2 = []


            for (let a = 0; a < bd.length; a++) {


                if (a < 1) {

                    for (let b = 1; b <= 12; b++) {
                        title[0] = bd[a][0]
                        data1[b - 1] = bd[a][b]

                    }
                }
                else {
                    for (let b = 1; b <= 12; b++) {
                        title[1] = bd[a][0]
                        data2[b - 1] = bd[a][b]

                    }
                }

            }

            data = [data1, data2]

            let x = {
                labels,
                data,
                color: [],
                title,
            }

            dispatch({
                type: GET_CHARTDATA,
                payload: x
            })

        }


    }



}

export const resetChartData = () => dispatch => {
    const x = {
        labels: [],
        data: [],
        color: [],
        title: ''
    }

    dispatch({
        type: RESET_CHARTDATA,
        payload: x
    })
}