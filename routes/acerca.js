var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('acerca',
    { title: 'Nueva página',
    texto: 'Esta es otra página',
    foto: 'http://i.giphy.com/a9d3bbcM3ImXe.gif'
  }
  );
});

module.exports = router;
