const { Router } = require("express");
const router = new Router();

const mysql = require("mysql");

// Conexión a base de datos

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_node",
    });

    conn.connect((err) => {
    if (err) throw err;
    console.log("CONEXIÓN ESTABLECIDA");
    });

// SELECT
    router.get("/", (req, res) => {
    let sql = "SELECT * FROM producto";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render("../views/productos.hbs", {
        results: results,
        });
    });
    });


    /* maneja solicitud post para guardar un nuevo producto en la base de datos, utizando los datos enciados en el cuerpo de la solicitud, y luego redirige al usuario a la página principal*/

    router.post('/save', (req, res) => {
        let data = { producto_nombre: req.body.producto_nombre, producto_precio: req.body.producto_precio };
        let sql = "INSERT INTO producto SET ?";
        let query = conn.query(sql, data, (err, results) => {
            if (err) throw err;
            res.redirect('/');
        });
    });

module.exports = router;
