const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const usersRepo = require('./repositories/users');

const app = express(); // An object web server object
app.use(bodyParser.urlencoded({ extended: true })); // middleware
app.use(cookieSession({
 keys: ['1zMsv%l2#6VA'] // encryption key
}));

app.get('/', (req, res) => {
  // This is a "route handler"
  res.send(`
  <div>
    Your id is: ${req.session.userId}
    <form method="POST">
      <input name="email" placeholder="email" />
      <input name="password" placeholder="password" />
      <input name="passwordConfirmation" placeholder="password confirmation" />
      <button>Sign Up</button>
    </form>
  </div>
 `);
});

app.post('/', async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;

  const existingUser = await usersRepo.getOneBy({ email });
  if (existingUser) {
    return res.send('Email in use');
  }

  if (password !== passwordConfirmation) {
    return res.send('Passwords must match');
  }

  // Create a user in our user repo to represent this person
  const user = await usersRepo.create( { email, password });

  // Store the id of that user inside the users cookie
  req.session.userId = user.id; // session object is added to req by cookieSession

  res.send('Account created!!!');
});

app.listen(3000, () => {
  console.log('Listening');
});
