import React, { Fragment } from 'react';

const MunicipioData = ({ id, municipio, cabecera, extension, latitud, longitud, msm }) => {
    return (
        <Fragment>
            <tr>
                <td>{id}</td>
                <td>{municipio}</td>
                <td>{cabecera}</td>
                <td>{extension}</td>
                <td>{latitud}</td>
                <td>{longitud}</td>
                <td>{msm}</td>
            </tr>

        </Fragment>
    );
};

export default MunicipioData;