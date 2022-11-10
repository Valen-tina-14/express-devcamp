const express = require('express')
const {
    getAllCourses,
    getSingleCourses,
    createCourses,
    updateCourses,
    deleteCourses
    
 } = require('../controllers/coursesController')

//Definir objeto de ruteo
const router = express.Router()

//crear rutas sin parametro
router.route('/')
            .get(getAllCourses)
            .post(createCourses)

//crear rutas con parametro
router.route('/:id')
            .get(getSingleCourses)
            .put(updateCourses)
            .delete(deleteCourses)
            
module.exports = router 