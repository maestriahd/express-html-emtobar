var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('about',
    { title: 'Acerca de',
    texto: 'Hola amigos ¿cómo están?',
    foto: 'http://i.giphy.com/3ohzdZBJUZIPIzpQ2c.gif'
  }
  );
});

module.exports = router;
