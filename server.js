//1.Crear el objeto express 
const express = require('express')
//2. Citar las dependecncias necesarias 
const dotenv = require('dotenv')
const colors = require ('colors')
const connectDB = require('./config/db')
const listEndPoint = require('express-list-endpoints')
// Los componentes de  ruta
const bootcampRoutes = require('./routes/BootcampRoutes') 
const userRoutes = require('./routes/userRoutes') 
const courseRoutes = require('./routes/CourseRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
//3. Establecer archivo de configuracion 
dotenv.config({
    path: './config/config.env'
})
console.log(process.env.PORT)

//Crear el objeto aplicación para el servidor de desarrollo 
const app = express()
//VALIDAR EL OBJETO APLICACIÓN 
//para recibir datos en formato json
app.use(express.json())
//conexion a bd
connectDB()

//rutas de proyecto 
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/users' , userRoutes)
app.use('/api/v1/courses' , courseRoutes)
app.use('/api/v1/reviews' , reviewRoutes)
//Endpoint de aplicacion  
//EndPoints de dominio  oo
//Imprimir la lista de endpoints validas por el proyecto 
console.log(listEndPoint(app))

//Ejecutar el servidor de desarrollo 
//Parametros 
            //Puertos de escucha - listen 
app.listen(process.env.PORT ,()=>{
    console.log(`Servidor activo en puerto 5000`.bgMagenta.black)
})