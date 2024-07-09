const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {checkApiKey} = require('./middlewares/auth.handler')

require('dotenv').config()

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();




const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}


//ruta de prueba 
app.get('/nueva-ruta',checkApiKey,(req,res)=>{
  res.send('hola este es mi server')
})




//middlewares
app.use(cors(options));
app.use(express.json());
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
require('./utils/auth')



//routes/server
routerApi(app);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Mi port' +  port);
});
