import { constants } from './index'

export default {
  user: constants.DB.DBUSER,
  password: constants.DB.DBPASSWORD,
  database: constants.DB.DBNAME,
  options: {
    dialect: constants.DB.DIALECT,
    host: constants.DB.DBHOST,
    dialectOptions: {
      multipleStatements: true
    },
    logging: false,
    timezone: '-06:00',
    define: {
      freezeTableName: true,
      timestamps: false,
      underscored: true
    }
  }
}


