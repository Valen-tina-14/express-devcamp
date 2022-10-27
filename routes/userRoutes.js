const express = require('express')
const {
    getAllUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
    
 } = require('../controllers/userController')

//Definir objeto de ruteo
const router = express.Router()

//crear rutas sin parametro
router.route('/')
            .get(getAllUser)
            .post(createUser)

//crear rutas con parametro
router.route('/:id')
            .get(getSingleUser)
            .put(updateUser)
            .delete(deleteUser)
            
module.exports = router 




























