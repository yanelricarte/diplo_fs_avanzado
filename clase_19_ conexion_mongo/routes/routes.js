    // routes.js

    const express = require("express");
    const session = express.Router();
    const connection = require("../database");


    session.get("/", (req, res) => {
    res.render("index");
    });

    session.post("/login", (req, res) => {
    if (!req.body || !req.body.username || !req.body.password) {
        res.send("Usuario inválido");
        return;
    }

    const { username, password } = req.body;
    const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    connection.query(sql, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
        req.session.loggedIn = true;
        req.session.username = username;
        res.redirect("/home");
        } else {
        res.send("Usuario o contraseña incorrectos");
        }
    });
    });

    session.get("/home", (req, res) => {
    if (req.session.loggedIn) {
        res.render("home", { username: req.session.username });
    } else {
        res.redirect("/");
    }
    });

    session.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
    });

    module.exports = session;
