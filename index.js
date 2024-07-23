const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { checkApiKey } = require('./middlewares/auth.handler');
require('dotenv').config();

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
};

app.use(cors(options));
require('./utils/auth/index')

app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send("hola esta es mi ruta");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
