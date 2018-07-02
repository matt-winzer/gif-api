const express = require('express')
const router = express.Router()
const knex = require('../db/connection') 

router.get('/', (req, res, next) => {
  knex('gif')
    .then(gifs => {
      res.json(gifs)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  knex('gif')
    .where('id', req.params.id)
    .then(gif => {
      !gif.length && res.json({message: 'Gif not found. Please try another id.'})
      res.json(gif[0])
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  knex('gif')
    .where('id', req.params.id)
    .update(req.body)
    .returning('*')
    .then(updated => {
      res.json({updated: updated[0]})
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  knex('gif')
    .insert(req.body)
    .returning('*')
    .then(inserted => {
      res.json({inserted: inserted[0]})
    })
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  knex('gif')
    .where('id', req.params.id)
    .delete()
    .returning('*')
    .then(deleted => {
      !deleted.length && res.json({message: 'Gif not found. Please try another id.'})
      res.json({deleted: deleted[0]})
    })
    .catch(next)
})

module.exports = router
