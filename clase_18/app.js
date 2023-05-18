const express = require ("express");
const hbs = require("hbs");
const movieRoutes = require('./routes/movieRoutes');
const configureSession = require ("./routes/sessions");
const sessionRoutes = require("./routes/routes");



const port = 5002;

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials/")


// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


configureSession(app);



app.use ('/', sessionRoutes );

// Ruta para api peliculas
app.use ('/movies', movieRoutes );





app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}`);
});
