const express = require("express");
const session = require("express-session");
const hbs = require("hbs");

const app = express();
const port = 5001;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials/")

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: '123456',
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // Fecha de expiración en una semana
    }
}));


app.get("/", (req, res) => {
    res.render("home");
});

app.post("/registro", (req, res) => {
    req.session.my_variable = req.body;
    res.redirect('/perfil');
});

app.get("/perfil", (req, res) => {
    const user = req.session.my_variable;
    res.render("perfil", {
        user,
    });
});

app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}`);
});
