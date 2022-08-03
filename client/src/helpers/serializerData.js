
export function serializeToDataModel(model, data){
    const fields = []
    model.columns.forEach(element => {
        fields.push(element.field)
    })
    
    const filtered = data.map(element=>{
        return Object.keys(element)
        .filter(key => fields.includes(key))
        .reduce((obj, key) => {
            return {
            ...obj,
            [key]: element[key]
            };
        }, {});
    })
    
    return filtered
}