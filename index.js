require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors('https://itinerary-publisher.vercel.app/'));

const sanitizer = require('sanitizer');
app.use((req, res, next) => {
  if (req.body) {
    for (const prop in req.body) {
      req.body[prop] = sanitizer.escape(req.body[prop]);
    }
  }
  next();
});

app.use(express.urlencoded({ extended: true }));

const router = require('./app/router');
app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log("L'api écoute...");
})