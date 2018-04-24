//  OpenShift sample Node application
var express = require('express'),
    app     = express(),
    morgan  = require('morgan');

var os = require('os');

var hostname = "",
    uptime = "";

Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

hostname = os.hostname();
uptime = os.uptime();

app.get('/', function (req, res) {
  res.render('index.html', { 
    hostname, uptime
  });
});

app.get('/reload', function (req, res) {
  res.send('<head><meta http-equiv="refresh" content="6"></head>');
  res.render('index.html', { 
    hostname, uptime
  });
//  res.redirect(req.get('referer'));
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
