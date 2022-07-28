

export async function sequelizeLoader(sequelizeInstance = null) {
    if (!sequelizeInstance) return
    
    await sequelizeInstance.sync({ alter: true})
    .then(()=> {
        console.log('all models has been created')
    })
    .catch(err => console.error(err))
}