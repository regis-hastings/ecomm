const express = require('express');

const app = express(); // An object that describes all the different things that a web server can do
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
  req.on('data', data => {
    const parsed = data.toString('utf8').split('&');
    const formData = {};
    for (let pair of parsed) {
      const [key, value] = pair.split('=');
      formData[key] = value;
    }
    console.log(formData);
  });
  res.send('Account created!!!');
});

app.listen(3000, () => {
  console.log('Listening');
});