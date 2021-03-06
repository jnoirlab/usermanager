var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , port = process.env.PORT || 3000
  , config = require('./config.json')
  , mongoose = require('mongoose');

app.set('views', __dirname + '/views')
app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')
mongoose.connect(config.mongo);

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(require('./controllers'))

app.listen(port, function() {
  console.log('Listening on port ' + port)
})