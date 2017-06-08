var express = require('express')
  , app = express()

app.use(express.static(__dirname + '/view'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/script'));
//Store all JS and CSS in Scripts folder.

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res, next) {
  try {
    res.sendFile('index.html')
  } catch (e) {
    next(e)
  }
})

app.listen(port, ip, function () {
  console.log('Listening on' + ip + port)
})