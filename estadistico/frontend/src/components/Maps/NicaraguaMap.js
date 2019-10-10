import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import img from '../../Image/marcador64.png'
import { Map, GeoJSON, Marker, TileLayer } from 'react-leaflet'
import '../Maps/map.css'
import { departamentos } from '../../GeoJSON/Departamentos'

let myIcon = L.icon({
    iconUrl: img,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
})

class NicaraguaMap extends Component {

    state = {
        position: [13, -85],
        zoom: 7,
        url: 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
        url2: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
    }


    render() {

        const { position, url, url2, zoom } = this.state

        return (
            <Map className='map' center={position} zoom={zoom}>
                <TileLayer
                    url={url2}
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <GeoJSON data={departamentos}

                    onEachFeature={(feauture, layer) => {

                        layer.on('mouseover', function () {
                            layer.bindTooltip(feauture.properties['departamento']).openTooltip()
                        })

                        layer.on('click', function () {
                            let id = feauture.properties['id'];
                            let urlLink = `/#/clima/precipitacion/departamento/${id}`
                            window.location = urlLink

                        })

                    }}

                />
            </Map>
        );
    }
}

export default NicaraguaMap;
