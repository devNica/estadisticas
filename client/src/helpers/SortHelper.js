import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa'
import './helper.css'

const sortIcons = {}
sortIcons.FULL = <span className='sort'><FaSort/></span>
sortIcons.DOWN = <span className='sort'><FaSortDown/></span>
sortIcons.UP = <span className='sort'><FaSortUp/></span>

export class SortHelper {
    
    static selectIconSort({ strategy, ...rest}) {
        console.log('verficar: ', strategy)
        return sortIcons[strategy]
    }
}