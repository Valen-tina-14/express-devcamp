//Dependencias:
//el objeto de conexion
const sequelize = require('../config/seq')
//datatypes de sequelize
const { DataTypes } = require('sequelize')

//el modelo

const UserModel = require('../models/user')

//crear la entidad
const User = UserModel(sequelize, DataTypes)

// Listar todos los users 
exports.getAllUser = async (req, res)=>{
    //traer los usuarios
    const users = await User.findAll();
    //response con los datos
    res
        .status(200)
        .json({
            "success": true,
            "data": users
        })
}

// Listar users por id 
exports.getSingleUser = async (req, res)=>{
    //console.log(req.params.id)
    const singleUser = await User.findByPk(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

// Crear nuevo user 
exports.createUser = async (req, res)=>{
    const newUser = await User.create(req.body);
    res
        .status(200)
        .json({
            "success": true,
            "data": newUser
        })
}

//Actualizar el user 
exports.updateUser = async (req, res)=>{
    // Change everyone without a last name to "Doe"
await User.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  const singleUser = await User.findByPk(req.params.id);
  res
  .status(200)
  .json({
      "success": true,
      "data": singleUser
  }) 
}

//Borrar users 
exports.deleteUser = async (req, res)=>{
    const singleUser = await User.findByPk(req.params.id);
    await User.destroy({
    where: {
      id: req.params.id
    }
  });
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

