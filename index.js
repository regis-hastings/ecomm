const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const productsRouter = require('./routes/admin/products');

const app = express(); // A web server object

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true })); // middleware

app.use(
  cookieSession({
    keys: ['1zMsv%l2#6VA'] // encryption key
  })
);

app.use(authRouter);
app.use(productsRouter);

app.listen(3000, () => {
  console.log('Listening');
});
