'use strict';
const { generateHash } = require ('../helpers/helper')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Admin.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty : {
          msg: 'Nama tidak boleh kosong.'
        }
      }
    },
    username:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty : {
          msg: 'Username tidak boleh kosong.'
        },
        isAlphanumeric: {
          msg: 'Username hanya terdiri dari Angka dan Huruf.'
        },
        notNull: {
          msg: 'Username tidak boleh kosong.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty : {
          msg: 'Password tidak boleh kosong.'
        },
        notNull: {
          msg: 'Password tidak boleh kosong.'
        },
        minLength (value) {
          if (value.length < 6) {
            throw new Error('Password minimal 6 karakter')
          } 
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(instance, options) {
        instance.password = generateHash(instance.password)
      }
    },
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};