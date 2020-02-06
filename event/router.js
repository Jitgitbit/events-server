const Event = require(`./model`);
const { Router } = require('express')
const router = new Router()
const db = require(`../db`);

router.get('/event', (req, res, next) => {
  Event.findAll()
    .then(events => {
      res.send(events);
    })
    .catch(err => next(err))
});

router.get('/event/:id', (req, res, next) => {
  Event.findByPk(parseInt(req.params.id)) // beware: if you want to define a const with req.params.id you have to parseInt(), because Url returns a string !!
    .then(event => {                      // above, I just did it here, although not required as it is not defined in a variable const
      res.json(event); //send for strings, json for data. it works both but it's better practice!
    })
    .catch(err => next(err))
});

router.post(`/event`, (req, res, next) => {
  console.log(req.body)
  Event.create(req.body)
    .then(event => {
      res.send(event);
    })
    .catch(err => next(err))
})

router.put(
  '/event/:id',
  (request, response, next) => Event
    .findByPk(request.params.id)
    .then(event => event.update(request.body))
    .then(event => response.send(event))
    .catch(next)
)

router.delete(
  '/event/:id',
  (request, response, next) => Event
    .destroy({ where: { id: request.params.id }})
    .then(number => response.send({ number }))
    .catch(next)
)

module.exports = router;
