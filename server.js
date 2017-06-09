var express = require('express')
  , app = express()
  , path = require('path')

app.use('/view', express.static('view'));
//Store all HTML files in view folder.
app.use('/script', express.static('script'));
//Store all JS and CSS in Scripts folder.

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res, next) {
  try {
    res.sendFile(path.join(__dirname +'/view/index.html'))
  } catch (e) {
    next(e)
  }
})

app.listen(port, ip, function () {
  console.log('Listening on' + ip + port)
})