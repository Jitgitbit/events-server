const Event = require(`./model`);
const { Router } = require('express')
const router = new Router()
const db = require(`../db`);

router.get('/events', (req, res, next) => {
  Event.findAll()
    .then(events => {
      res.send(events);
    })
    .catch(err => next(err))
});

router.get('/events/:id', (req, res, next) => {
  Event.findByPk(req.params.id) // beware: if you want to define a const with req.params.id you have to parseInt(), because Url returns a string !!
    .then(event => {                      
      res.json(event); //send for strings, json for data. it works both but it's better practice!
    })
    .catch(err => next(err))
});

router.post(`/events`, (req, res, next) => {
  console.log(req.body)
  Event.create(req.body)
    .then(event => {
      res.send(event);
    })
    .catch(err => next(err))
})

router.put(
  '/events/:id',
  (request, response, next) => Event
    .findByPk(request.params.id)
    .then(event => event.update(request.body))
    .then(event => response.send(event))
    .catch(next)
)

router.delete(
  '/events/:id',
  (request, response, next) => Event
    .destroy({ where: { id: request.params.id }})
    .then(number => response.send({ number }))
    .catch(next)
)

module.exports = router;
