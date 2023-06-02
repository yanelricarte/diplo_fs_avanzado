const express = require('express');
const router = express.Router();
const Character = require('../models/Character');


//Obtener todos lo datos del personaje

router.get('/', async (req, res)=> {
    try{
        const character = await Character.find();
        res.json(character);
    } catch (error){
        console.error('Error al obtener los personajes');
        res.status(500).json({ error : 'Error al obtener los personajes'})
    }
})

module.exports = router;