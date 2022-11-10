const express = require('express')
const {
    getAllReviews,
    getSingleReviews,
    createReviews,
    updateReviews,
    deleteReviews
    
 } = require('../controllers/reviewsController')

//Definir objeto de ruteo
const router = express.Router()

//crear rutas sin parametro
router.route('/')
            .get(getAllReviews)
            .post(createReviews)

//crear rutas con parametro
router.route('/:id')
            .get(getSingleReviews)
            .put(updateReviews)
            .delete(deleteReviews)
            
module.exports = router 