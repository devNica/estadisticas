import { ZoneModel } from "../models/index"
import CustomTable from "../components/Table/CustomTable"


const modelStrategies = {}

modelStrategies.ZONES = ZoneModel

export class DataTableHelper {
    
    static selectInfoRepresentation({ strategy, configSorting=[], isDT=false, ...rest}) {
        let model = []
        
        if(configSorting && Array.isArray(configSorting) && configSorting.length > 0) {
            model = modelStrategies[strategy]['columns'].map((el, i)=> {
                    if(configSorting.some(j=>j.col === i)) {
                        configSorting.forEach(element => {
                            if(element.col === i && element?.type){
                                el.isSort = true
                                el.typeSort = element.type
                            }
                            else if (element.col === i && element.type){
                                el.isSort = true
                            }
                        })
                    } else {
                        el.isSort = false
                    }
                    return el
            })
            
        } else model =  modelStrategies[strategy]['columns']

        return <CustomTable {...rest} model = {model} isDT={isDT} />
    }
}