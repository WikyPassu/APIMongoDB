// config.js
const dotenv = require('dotenv').config();

/**
 * MONGO_URL: Aca va el string de conexion que proporciona Cluster
 * Reemplazar "<username>", "<password>" y "myFirstDatabase" por el nombre de usuario, contraseña y nombre de la base de datos
 * MONGO_DB_NAME: Reemplazar "myFirstDatabase" por el nombre de la base de datos
*/
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_URL: process.env.MONGO_URL || 'mongodb+srv://Passu:32otitag@cluster0.jl5qj.mongodb.net/veterinaria?retryWrites=true&w=majority',
    MONGO_DB_NAME: process.env.MONGO_DB_NAME || 'veterinaria'
};