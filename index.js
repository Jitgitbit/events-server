const express = require('express');
const db = require(`./db`)
const bodyParser = require('body-parser');
const cors = require(`cors`);
const Event = require(`./event/model`);
const router = require(`./event/router`);


const app = express();

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(router)


const port = process.env.PORT || 4000;


app.listen(port, () => {
    console.log(`Listening on :${port}`) // USE THIS NOTATION FOR THE PORT !! 
  });



