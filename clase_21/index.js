const express = require("express");
const hbs = require("hbs");
const axios = require("axios");
require("dotenv").config();
port = 3002;

const app = express();
app.use(express.static("public"));

//Configurar el directorio de vistas y el motos de plantilla
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Endpoints para mostrar formulario
app.get("/", (req, res) => {
    res.render("index", {
        title: "Formulario de repositorio",
    });
    });

    // Endpoint para obtener informacion de un repositorio
    app.get("/repositories", async (req, res) => {
    try {
        const owner = req.query.owner;
        const repo = req.query.repo;
        const url = `https://api.github.com/repos/${owner}/${repo}`;

        //Agregar el token de autenticacion en el encabezado de la solicitud
        const token = process.env.GITHUB_TOKEN;
        const headers = {
        Authorization: `Bearer ${token}`,
        };

        //Realizar la solicitud a la API de GitHUb
        const response = await axios.get(url, { headers });

        //Renderizar la vista de detalla del repositorio
        res.render("repository", {
        title: "Detalle del repositorio",
        repository: response.data,
        });
    } catch (error) {
        // Manejar cualquier error de la solicitud
        res.render("error", {
        title: "Error",
        message: "Error al obtener información del respositorio",
        });
    }
    });

    app.listen(port, () => {
    console.log("Servidor iniciado en http://localhost:3002 ");
    });
