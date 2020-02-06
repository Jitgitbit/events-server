const express = require('express');
const db = require(`./db`)
const Event = require(`./event/model`);

const app = express();

const port = process.env.PORT || 4000;


// app.get('/doctor', (req, res, next)=>{
//   console.log('getting doctor');
//   const name = req.query.name || 'Who'; // .QUERY! not .body
//   const doctor = 'Dr. ' + name;
//   res.send(doctor);
//   next();
// })
// app.get('/appointment', (req, res, next)=>{
//   console.log('getting appointment');
//   const doctor = req.query.doctor || 'Eggman';
//   const patient = req.query.patient || 'zero';
//   const description = `Dr. ${doctor} and patient ${patient}`;
//   res.send(description);
//   next();
// })

app.listen(port, () => {
    console.log(`Listening on :${port}`) // USE THIS NOTATION FOR THE PORT !! 
  });
