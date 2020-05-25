const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // An object that describes all the different things that a web server can do
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => { // This is a "route handler"
 res.send(`
  <div>
    <form method="POST">
      <input name="email" placeholder="email" />
      <input name="password" placeholder="password" />
      <input name="passwordConfirmation" placeholder="password confirmation" />
      <button>Sign Up</button>
    </form>
  </div>
 `);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Account created!!!');
});

app.listen(3000, () => {
  console.log('Listening');
});