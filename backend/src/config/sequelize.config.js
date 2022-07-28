import Sequelize from 'sequelize'
import { db } from './index'

const sequelizeConfig = new Sequelize(
    db.database,
    db.user,
    db.password,
    db.options
  )
  
  export default sequelizeConfig