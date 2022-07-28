import Sequelize from 'sequelize'
import { sequelize } from '../config'
const { DataTypes, Model } = Sequelize

export default class MunicipioModel extends Model {}

MunicipioModel.init({
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
  cabecera: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  extension: {
    type: DataTypes.DECIMAL(13,4),
    allowNull: false
  },
  latitud_norte: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  longitud_oeste: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  msm: {
    type: DataTypes.DECIMAL(7,2),
    allowNull: false,
    defaultValue: 0.00
  },
  fk_departamento: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'departamento',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1
  }
}, {
  sequelize,
  modelName: 'municipio'
})
