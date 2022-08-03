/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { DataTableHelper } from '../../helpers/DataTableHelper'
import  { connect } from 'react-redux'

const config = [
    { col: 0 },
    { col: 1 },
    { col: 2 }
]

const mapStateToProps = (state) =>({
    zones: state.geo.zones
})

const CustomDataTable = ({ zones, strategy }) => {

    return (
        <div>
            <DataTableHelper.selectInfoRepresentation strategy={strategy} data={zones} isDT={true} configSorting={config}/>
        </div>
    )
}

export default connect(mapStateToProps, null)(CustomDataTable)