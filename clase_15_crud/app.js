const express = require("express");
const app = express();

const hbs = require("hbs");

const port = 8085;

//---------------HANDLEBARS

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

/*  -------------middleware ---*/
app.use("/assets", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));


app.use(require("./router/router"));

app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}`);
});
