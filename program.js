var express = require('express');
var app = express();

app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000, function() {
  console.info('http://localhost:3000');
});
