var express = require('express');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB);
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/', function(req, res) {
  res.json({msg: 'yay!'});
  console.log('got it!');
});

app.use('/api', router);

app.listen(port);
console.log('Listening on port: ' + port);
