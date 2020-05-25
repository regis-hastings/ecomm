const express = require('express');

const app = express(); // An object that describes all the different things that a web server can do
app.get('/', (req, res) => { // This is a "route handler"
 res.send('hi there!');
});

app.listen(3000, () => {
  console.log('Listening');
});