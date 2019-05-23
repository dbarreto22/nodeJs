
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('api works! Yeep!');
});

router.get('/hola/:mensaje', (req, res) => {
    res.send({ mensaje: 'Hola mundo!' + req.params.mensaje, tipo: 'GET' });
});

router.post('/hola', (req, res) => {
    res.send({ mensaje: 'Hola mundo!' + req.body.mensaje, tipo: 'POST' });
});

router.put('/hola', (req, res) => {
    res.send({ mensaje: 'Hola mundo!' + req.body.mensaje, tipo: 'PUT' });
});


router.get('https://r179-27-99-70.ir-static.anteldata.net.uy:8443/FakeNews-web/RESTServices/prueba',(req, res) => {
    res.send({ mensaje: 'Hola mundo!' + req.params.mensaje, tipo: 'GET' });
}); 
  

module.exports = router;