const express = require('express');
const router = express.Router();
const knex = require('../db/connection') 

router.get('/', function(req, res, next) {
  knex('gif')
    .then(gifs => {
      res.json(gifs)
    })
})

module.exports = router
