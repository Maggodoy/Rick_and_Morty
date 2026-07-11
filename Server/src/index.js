const express = require('express');
const server = express();
const { conn } = require('../DB_connection');
const mainRouter = require('./routes/mainRouter');
const PORT = 3001;

// Configuración de CORS
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*'); 
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
   next();
});

// Conexión de rutas
server.use('/', mainRouter);

// Levantamos el servidor
server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});

// Sincronización de la base de datos
conn.sync({ force: false })
   .then(() => {
       console.log('Database connected successfully!');
   })
   .catch((error) => {
       console.log('Database sync error: ' + error.message);
   });