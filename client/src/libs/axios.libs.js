import axios from "axios";
import { constants } from '../config/index'


export default function http ({serverAddress = null, customHeaders } = {}) {
    return axios.create({
        baseURL: serverAddress || constants.SERVER_ADDRESS,
        headers: { 
            ...customHeaders,  
            "Content-Type": "application/json", 
            'Authorization': `bearer ${localStorage.getItem('token')}` }
    })
}
    