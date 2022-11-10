//Dependencias:
//el objeto de conexion
const sequelize = require('../config/seq')
//datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')

//el modelo

const coursesModel = require('../models/courses')

//crear la entidad
const Courses = coursesModel(sequelize, DataTypes)

// Listar todos los courses 
exports.getAllCourses = async (req, res)=>{
    try {
        //traer los courses
        const courses = await Courses.findAll();
        //response co los datos
        res
        .status(200)
        .json({
            "success": true,
            "data": courses
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

// Listar courses por id 
exports.getSingleCourses = async (req, res)=>{
    try {
        //console.log(req.params.id)
    const singleCourses = await Courses.findByPk(req.params.id);
    if(singleCourses){
    res
        .status(200)
        .json({
            "success": true,
            "data": singleCourses
        })
    }else{
        res
        .status(400)
        .json({
            "success": false,
            "errors": "course no existe"
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



// Crear nuevo course 
exports.createCourses = async (req, res)=>{
    try {
        const newCourses = await Courses.create(req.body);
        res
            .status(200)
            .json({
                "success": true,
                "data": newCourses
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

//Actualizar el courses 
exports.updateCourses = async (req, res)=>{
   try {
    const singleCourses = await Courses.findByPk(req.params.id);
    if(!singleCourses){
        res
        .status(400)
        .json({
            "success": false,
            "errors": "Courses no existe"
        })
    }else{
        // actualizar course
    await Courses.update(req.body, {
        where: {
          id: req.params.id
        } });
        //selecciono course actualizado
        const updateCourses = await Courses.findByPk(req.params.id)
      //envia respuesta
      res
      .status(200)
      .json({
          "success": true,
          "data": updateCourses
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

//Borrar course 
exports.deleteCourses = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const singleCourses = await Courses.findByPk(req.params.id);
        if (!singleCourses) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Courses no existente"
        })
        } else {
            await Courses.destroy({
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