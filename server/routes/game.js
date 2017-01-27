var express = require('express');
var router = express.Router();
const queries = require('../api_functions/api-functions.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.getAllGames()
    .then((games)=>{
      console.log(games);
      res.json(games);
    })
});

router.post('/', function(req, res, next) {
  queries.postOneGame(req.body.name, req.body.score)
    .then((games)=>{
      console.log(games);
      res.json(games);
    });
});

module.exports = router;
