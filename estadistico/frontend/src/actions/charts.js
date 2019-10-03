import {
    GET_CHARTDATA,
    RESET_CHARTDATA,
} from './types'

export const getChartData = (origen) => (dispatch, getState) => {

    let arreglo


    if (origen === 'zonas') {
        arreglo = getState().geo.zonas

    }
    if (origen === 'departamentos') {
        arreglo = getState().geo.departamentos

    }


    var letters = '0123456789ABCDEF';
    var color = [];
    let colorHex = '#'

    let label = {}
    let ext = {}
    for (var i = 0; i < arreglo.length; ++i) {
        label[i] = arreglo[i].nombre;
        ext[i] = parseFloat(arreglo[i].extension);

        for (var k = 0; k < 6; k++) {
            colorHex += letters[Math.floor(Math.random() * 16)];

        }

        color.push(hexToRGBA(colorHex, 80))
        colorHex = '#'
    }



    const x = {
        labels: Object.values(label),
        data: Object.values(ext),
        color: color,

    }


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

export const resetChartData = () => dispatch => {
    const x = {
        labels: [],
        data: [],
        color: []
    }

    dispatch({
        type: RESET_CHARTDATA,
        payload: x
    })
}