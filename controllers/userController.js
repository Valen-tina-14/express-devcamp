//Dependencias:
//el objeto de conexion
const sequelize = require('../config/seq')
//datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')

//el modelo

const UserModel = require('../models/user')

//crear la entidad
const User = UserModel(sequelize, DataTypes)

// Listar todos los users 
exports.getAllUser = async (req, res)=>{
    try {
        //traer los usuarios
        const users = await User.findAll();
        //response co los datos
        res
        .status(200)
        .json({
            "success": true,
            "data": users
        })
    } catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "errors": "error de servidor"
        })
    }
   
}

// Listar users por id 
exports.getSingleUser = async (req, res)=>{
    try {
        //console.log(req.params.id)
    const singleUser = await User.findByPk(req.params.id);
    if(singleUser){
    res
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
    }else{
        res
        .status(400)
        .json({
            "success": false,
            "errors": "usuario no existe"
        })
    } 
}
catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "errors": "error de servidor"
        })
    }
}



// Crear nuevo user 
exports.createUser = async (req, res)=>{
    try {
        const newUser = await User.create(req.body);
        res
            .status(200)
            .json({
                "success": true,
                "data": newUser
            })
    } catch (error) {
        if(error instanceof ValidationError){
            //recorramos el arreglo de errores
            //map
            const errores = error.errors.map((elemento)=>{return elemento.message
            })
            res
            .status(400)
            .json({
                "success": false,
                "errors": errores
            })
        }else{
            res
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor"
            })
        }
    }
   
}

//Actualizar el user 
exports.updateUser = async (req, res)=>{
   try {
    const singleUser = await User.findByPk(req.params.id);
    if(!singleUser){
        res
        .status(400)
        .json({
            "success": false,
            "errors": "usuario no existe"
        })
    }else{
        // actualizar usuario
    await User.update(req.body, {
        where: {
          id: req.params.id
        } });
        //selecciono user actualizado
        const updatedUser = await User.findByPk(req.params.id)
      //envia respuesta
      res
      .status(200)
      .json({
          "success": true,
          "data": updatedUser
      }) 
    }
     
   } catch (error) {
    res
        .status(400)
        .json({
            "success": false,
            "errors": "error de servidor desconocido"
        })
   }
}

//Borrar users 
exports.deleteUser = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleUser = await User.findByPk(req.params.id);
        if (!SingleUser) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
        } else {
            await User.destroy({
                where: {
                    id: req.params.id
                }
              });
            }
} catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "errors": " Error de servidor desconocido"
        })
    }
}


