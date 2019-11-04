var express = require('express');
var app = express();
const PORT = parseInt(process.env.PORT || 3000);

app.get('/', function (req, res) {
  if (Math.random() * 5 > 4) {
    return res.status(500).send()
  }
  res.status(200).send('Pong!');
});



app.listen(PORT, function () {
  console.log('App listening on port '+PORT+'!');
});


