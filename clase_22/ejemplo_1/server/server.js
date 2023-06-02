const express = require('express');
const cors = require('cors');
const app = express();

// Middleware CORS
app.use(cors());

// Ruta de ejemplo
app.get('/api/data', (req, res) => {
  const data = {
    message: '¡Hola desde el backend!',
    author: 'Cosme Fulano',
    date: new Date().toISOString()
  };
  res.json(data);
});

// Puerto de escucha del servidor
const port = 3001;
app.listen(port, () => {
    console.log(`Servidor backend ejecutándose en el puerto ${port}`);
});
