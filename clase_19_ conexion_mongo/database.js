//database
const mysql = require("mysql2");


// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud-node"
});

// Verificación de la conexión a la base de datos
connection.connect((err) => {
    if (err) throw err;

    console.log("Conectado a base de datos Mysql");
})

module.exports = connection;