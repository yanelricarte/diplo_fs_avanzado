const { MongoClient } = require('mongodb');

//URL de conexion  a MongoDB
const url = 'mongodb://localhost:27017';

//Nombre de la base de datos
const dbNombre = 'escuela';

//Conexion a MongoDB
const client = new MongoClient(url, { useUnifiedTopology: true });

//Función para conectar a la base de datos

async function connect(){
    try{
        await client.connect();
        console.log('Conexión exitosa a MongoDB');
    } catch(error){
        console.error('Error al conectar a MongoDB', error);
    }
}

// Exportar la función de conexión y el cliente de MongoDB

module.exports = {
    connect,
    client
};
