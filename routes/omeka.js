// Importa las librerias necesarias para tener acceso al ruteador
var express = require('express');
var router = express.Router();
var request = require('request');
var async = require ('async');

var server = {
  baseUrl: 'http://192.169.250.12/~sandbox/omk',
  uri: '',
  method: 'GET',
  qs: {
    key: '20c49a2ee950699fb2e7d3243addec540c824927'
  },
  useQuerystring: true,
  json: true
}


// Función que se ejecuta cuando la petición es recibida por el servidor
// reacciona UNICAMENTE al método GET de HMTL
// más información al respecto de los diferentes métodos implementados en el
// protocolo HTML:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

// Cuando recibe la petición GET, ejecuta la función() con los parámetros:
// req (request/petición)
// res (response/respuesta)
router.get('/', function(req, res) {


  async.waterfall([
    //petición a omeka
    function(callback) {
      server.uri = '/objects'
      console.log('inicio request'),
      request(server, function (error, response, body) {
        if(error){
          callback(error)

        }
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        //res.render('omeka', {body} );
        callback(null, body)
      });
    },
    function(body, callback){
      console.log (body.length)
      callback(null,body)
    }
], function (error, result) {
  if (error) {
    //console.log(error)
  }

  res.render('omeka', {body: result});
});



});
// exprta la ruta para ser consumida por la aplicación
module.exports = router;
