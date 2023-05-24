const express = require("express");
const admin = require("firebase-admin");

const hbs = require("hbs");
const port = 3000;

const serviceAccount = require("./...");

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


const db = admin.firestore();
const todosCollection = db.collection('todos');

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

    app.get('/', async (req, res) => {
    const todosSnapshot = await todosCollection.get();
    const todos = todosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    res.render('index', { todos });
    });



app.get("/todos/create", (req, res) => {
    res.render("create");
    });

app.post("/todos/create", async (req, res) => {
    const { nombre, descripcion } = req.body;
    const todo = {
        nombre,
        descripcion,
    };
    await todosCollection.add(todo);
    res.redirect("/");
    });

app.get("/todos/edit/:id", async (req, res) => {
    const todoId = req.params.id;
    const todosSnapshot = await todosCollection.doc(todoId).get();
    const todo = {
        id: todosSnapshot.id,
        ...todosSnapshot.data(),
    };
    res.render("edit", { todo });
    });

app.post("/todos/edit/:id", async (req, res) => {
    const todoId = req.params.id;
    const { nombre, descripcion } = req.body;

    const todo = {
        nombre,
        descripcion,
    };

    await todosCollection.doc(todoId).update(todo);
    res.redirect('/');

    });

    app.get("/todos/delete/:id", async (req, res) => {
        const todoId = req.params.id;

        await todosCollection.doc(todoId).delete();

        res.redirect('/');
        })




    app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
    });
