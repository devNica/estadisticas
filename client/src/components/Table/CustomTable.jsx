import React from 'react'
import { SortHelper } from '../../helpers/SortHelper'
import './customtable.css'


const CustomTable = ({ model, data, isDT,  }) => {
    
    const renderHeaders = model.map((el, i) => (
        // eslint-disable-next-line react/jsx-pascal-case
        <th key={i}><span>{el.label}</span>{el.isSort && isDT ? <SortHelper.selectIconSort strategy={el.typeSort}/> : <></> }</th>
    ))

    const renderContent = data.map((el, i)=>(
        <tr key={i}>
            {
                Object.keys(data[0]).map((k, j) => (
                    <td key={j}>
                        {el[`${k}`]}
                    </td>
                ))
            }
        
        </tr>
    ))
    
    return (
        <table className='customTable'>
            <thead>
                <tr>{renderHeaders}</tr>
            </thead>
            <tbody>
                {renderContent}
            </tbody>
        </table>
    )
}

export default CustomTable