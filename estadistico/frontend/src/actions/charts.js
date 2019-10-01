import {

    GET_CHARTDATA,
} from './types'

export const getChartData = () => (dispatch, getState) => {

    const zonas = getState().geo.zonas

    let label = {}
    let ext = {}
    for (var i = 0; i < zonas.length; ++i) {
        label[i] = zonas[i].nombre;
        ext[i] = parseFloat(zonas[i].extension);
    }

    const x = {
        labels: Object.values(label),
        data: Object.values(ext)

    }


    // const chartData = {
    //     labels,
    //     datasets: [
    //         {
    //             label: 'Extension',
    //             data,
    //             backgroundColor: [
    //                 'rgba(255,99,132,0.6)',
    //                 'rgba(54,162,235,0.6)',
    //                 'rgba(255,206,86,0.6)',
    //                 'rgba(75,192,192,0.6)',
    //             ]
    //         }
    //     ]
    // }



    dispatch({
        type: GET_CHARTDATA,
        payload: x,
    })
}