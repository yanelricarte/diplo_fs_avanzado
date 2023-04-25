const express = require("express");

const app = express();
const port = 3000;




//Configurar Express para procesar datos en formato JSON

app.use(express.json());

// Configurar Express para procesar datos de formulario
app.use(express.urlencoded({ extended: false }));

//Para servir contenido estático
app.use(express.static("public"))


app.get("/", (req, res) => {
  res.sendFile(__dirname +"/views/index.html")
});

app.get("/generic", (req, res) => {
  res.sendFile(__dirname +"/public/generic.html")
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname +"/public/elements.html")
});


app.get("/formulario", (req, res) => {
  res.sendFile(__dirname +"/public/formulario.html")
});

app.post('/usuario',(req, res)=>{
  const nombre = req.body.nombre;
  const correo = req.body.correo;

  console.log('Datos formulario: ', nombre, correo);

  res.send('Datos recibidos');

})

/* 
    app.get("/", function (req, res) {
    res.send("Hello World con express");
    });

    app.get("/contacto", function (req, res) {
    res.sendFile(__dirname + "/public/contacto.html");
    });

    app.get("*", function (req, res) {
        res.send("ERROR 404");
      });
*/
    app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}`);
    });
