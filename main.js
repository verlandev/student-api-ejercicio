const express = require('express');

const PORT = 3000;


const database = require('./src/utils/database')

database.connectDB()

const indexRoutes = require('./src/api/index/index.routes')
const teachersRoutes = require('./src/api/teachers/teacher.routes')

const server = express()




server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use('/', indexRoutes)
server.use('/teachers', teachersRoutes)


server.use("*", (req, res, next) => {
    return res.status(404).json("No se encuentra la URL. Prueba con otra URL");
  });
  
  // Controlador de errores.
  server.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Unexpected Error!";
    return res.status(status).json(message);
  });

server.listen(PORT, () => {
    console.log(`Te escucho atentamente en http://localhost:${PORT}`)
})