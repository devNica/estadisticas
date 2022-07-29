import Sequelize from 'sequelize'
import { sequelize } from '../config'
const { DataTypes, Model } = Sequelize

export default class ZonaModel extends Model {}

ZonaModel.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  extension: {
    type: DataTypes.DECIMAL(13,4),
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fk_unidad: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'unidad',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1
  }
}, {
  sequelize,
  modelName: 'zona'
})
