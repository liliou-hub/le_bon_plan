var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('list of products');
});

// router.get('/:id', function(req, res) {
//   res.send('student id: '+req.params.id);
// });

module.exports = router;