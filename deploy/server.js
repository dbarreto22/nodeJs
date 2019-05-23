const express = require('express');
const path = require('path');
const http = require('http');
const process = require('process');
const bodyParser = require('body-parser');

const app = express();

// CONFIGURO LAS RUTAS DE MI APIdeploy/src/app/api.service.ts
const api = require('./src/app/api.service');
app.use('/api.service', api);

// CONFIGURO BODYPARSER PARA QUE PUEDA INTERPRETAR LOS DATOS
// QUE LLEGAN POR HTTP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// PONGO A SERVIR LA RUTA DE MIS ARCHIVOSdeploy/src
app.use(express.static(path.join(__dirname, './src')));

// DEVUELVO MI INDEX.HTML CUANDO SE APUNTE A CUALQUIER RUTAdeploy/src/index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

// CONFIGURO EL PUERTO DE MI SERVIDOR
const port = process.env.PORT || '5002';
app.set('port', port);

// CREO EL SERVIDOR
const server = http.createServer(app);

// EL SERVIDOR ESTA ESCUCHANDO PETICIONES
server.listen(port, () => console.log(`La magia pasa en localhost:${port}`));