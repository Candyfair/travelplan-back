require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

const router = require('./app/router');
app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log("L'api écoute...");
})