//Dependencias:
//el objeto de conexion
const sequelize = require('../config/seq')
//datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')

//el modelo

const reviewsModel = require('../models/reviews')

//crear la entidad
const Reviews = reviewsModel(sequelize, DataTypes)

// Listar todos los Reviews 
exports.getAllReviews = async (req, res)=>{
    try {
        //traer los Reviews
        const reviews = await Reviews.findAll();
        //response co los datos
        res
        .status(200)
        .json({
            "success": true,
            "data": reviews
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

// Listar reviews por id 
exports.getSingleReviews = async (req, res)=>{
    try {
        //console.log(req.params.id)
    const singleReviews = await Reviews.findByPk(req.params.id);
    if(singleReviews){
    res
        .status(200)
        .json({
            "success": true,
            "data": singleReviews
        })
    }else{
        res
        .status(400)
        .json({
            "success": false,
            "errors": "reviews no existe"
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



// Crear nuevo reviews 
exports.createReviews = async (req, res)=>{
    try {
        const newReviews = await Reviews.create(req.body);
        res
            .status(200)
            .json({
                "success": true,
                "data": newReviews
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

//Actualizar el review 
exports.updateReviews = async (req, res)=>{
   try {
    const singleReviews = await Reviews.findByPk(req.params.id);
    if(!singleReviews){
        res
        .status(400)
        .json({
            "success": false,
            "errors": "reviews no existe"
        })
    }else{
        // actualizar usuario
    await Reviews.update(req.body, {
        where: {
          id: req.params.id
        } });
        //selecciono reviews actualizado
        const updatedReviews = await Reviews.findByPk(req.params.id)
      //envia respuesta
      res
      .status(200)
      .json({
          "success": true,
          "data": updatedReviews
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

//Borrar review 
exports.deleteReviews = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const singleReviews = await Reviews.findByPk(req.params.id);
        if (!singleReviews) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Reviews no existente"
        })
        } else {
            await Reviews.destroy({
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