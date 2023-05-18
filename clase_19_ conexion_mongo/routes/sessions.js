    // sessions.js

    const session = require("express-session");
    const connection = require("../database");

    module.exports = function configureSession(app) {
    app.use(
        session({
        secret: "123456",
        resave: false,
        saveUninitialized: false,
        })
    );

    // Middleware para verificar la conexión a la base de datos
    app.use((req, res, next) => {
        req.connection = connection;
        next();
    });
    };
