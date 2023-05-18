const express = require ("express");
const hbs = require("hbs");
const movieRoutes = require('./routes/movieRoutes');
const configureSession = require ("./routes/sessions");
const sessionRoutes = require("./routes/routes");
const personajesRoutes = require("./routes/personajesRoutes");

const { connect } = require ("./db");

const port = 5002;

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials/")

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

configureSession(app);

// Conexion a MongoDB

connect();


// Ruta para api peliculas
app.use ('/movies', movieRoutes );
//Ruta sesiones
app.use ('/', sessionRoutes );
//Ruta mongodb

app.use('/personajes', personajesRoutes)



app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}`);
});
