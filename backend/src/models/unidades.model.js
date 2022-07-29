import Sequelize from 'sequelize'
import { sequelize } from '../config'
const { DataTypes, Model } = Sequelize

export default class UnidadesModel extends Model {}

UnidadesModel.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  unidad: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: 'unidad'
})