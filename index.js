const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');

const app = express(); // A web server object

app.use(bodyParser.urlencoded({ extended: true })); // middleware
app.use(
  cookieSession({
    keys: ['1zMsv%l2#6VA'] // encryption key
  })
);

app.use(authRouter);

app.listen(3000, () => {
  console.log('Listening');
});
