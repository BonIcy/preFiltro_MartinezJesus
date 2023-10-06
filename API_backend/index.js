
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routerBase = require('./routes/routes.js');
const cors = require('cors')

//documentacion api con swagger
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger/config.js')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


require('dotenv').config;
app.use(express.json());

//cors para dar permisos al port 3000 de hacer peticiones
const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204, 
};
app.use(cors(corsOptions));

const dbUrl = process.env.DDBB256 
const port = process.env.PORT256  
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexion exitosa a la base de datos.');
    app.use('/api', routerBase);

    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
  })
  .catch((error) => { 
  
    console.error('Error de conexion a la base de datos:', error);
  });