import Sequelize from 'sequelize'
import { sequelize } from '../config'
const { DataTypes, Model } = Sequelize

export default class SegmentoPoblacional extends Model {}

SegmentoPoblacional.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  segmento: {
    type: DataTypes.STRING(4),
    allowNull: false,
    unique: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1
  }
}, {
  sequelize,
  modelName: 'segmento_poblacional'
})