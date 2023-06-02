    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');

    const characterRoutes = require('./routes/characterRoutes');

    const app = express();
    const PORT = process.env.PORT || 3001;

    // Configuración de CORS
    app.use(cors());
    // Ruta estática para las imágenes
    app.use('/images', express.static(__dirname + '/public/images'));

    // Conexión a la base de datos MongoDB
    mongoose.connect('mongodb://localhost:27017/harry_potter', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(() => {
    console.log('Conexión exitosa a la base de datos');
    }).catch(error => {
    console.error('Error al conectar a la base de datos:', error);
    });

    // Rutas
    app.use('/api/characters', characterRoutes);

    // Iniciar el servidor
    app.listen(PORT, () => {
    console.log(`Servidor backend ejecutándose en el puerto ${PORT}`);
    });
