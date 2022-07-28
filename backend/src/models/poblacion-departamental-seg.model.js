import Sequelize from 'sequelize'
import { sequelize } from '../config'
const { DataTypes, Model } = Sequelize

export default class PoblacionDepartamentalSeg extends Model {}

PoblacionDepartamentalSeg.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  poblacion_gnral: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  poblacion_masc: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  poblacion_femn: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  poblacion_urbana: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  poblacion_urbana_masc: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  poblacion_urbana_femn: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  poblacion_rural: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  poblacion_rural_masc: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  poblacion_rural_fem: {
    type: DataTypes.BIGINT,
    allowNull: false
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
  fk_segmento: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'segmento_poblacional',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  },
  fk_periodo: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'periodo',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'poblacion_departamental_seg'
})
