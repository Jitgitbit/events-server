const Event = require(`./model`);
const { Router } = require('express')
const router = new Router()
const db = require(`../db`);

// router.get('/team', (req, res, next) => {
//   Team.findAll()
//     .then(teams => {
//       res.send(teams);
//     })
//     .catch(err => next(err))
// });

// router.get('/team/:id', (req, res, next) => {
//   Team.findByPk(req.params.id) // beware: if you want to define a const with req.params.id you have to parseInt(), because Url returns a string !!
//     .then(team => {
//       res.json(team); //send for strings, json for data. it works both but it's better practice!
//     })
//     .catch(err => next(err))
// });

// router.post(`/team`, (req, res, next) => {
//   console.log(req.body)
//   Team.create(req.body)
//     .then(team => {
//       res.send(team);
//     })
//     .catch(err => next(err))
// })

module.exports = router
