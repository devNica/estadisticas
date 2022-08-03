/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { DataTableHelper } from '../../helpers/DataTableHelper'
import zonesList from '../../helpers/zones.json'

const config = [
    { col: 0 },
    { col: 1 },
    { col: 2 }
]

const CustomDataTable = () => {

    return (
        <div>
            <DataTableHelper.selectInfoRepresentation strategy={'ZONES'} data={zonesList} isDT={true} configSorting={config}/>
        </div>
    )
}

export default CustomDataTable