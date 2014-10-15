var server = require('http').createServer()
  , fs = require('fs')
  , url = require("url");

server.on('request', function(req, res){
  var pathname = url.parse(req.url).pathname,
    tmp  = pathname.lastIndexOf("."),
    extension  = pathname.substring((tmp + 1));

  fs.readFile(__dirname + '/public' + pathname, function(err, data){
    if (err) {
      res.writeHead(500);
      return res.end('Error loading ' + pathname);
    }

    if (extension === 'html') res.writeHeader(200, {'Content-Type': 'text/html'});
    else if (extension === 'htm') res.writeHeader(200, {'Content-Type': 'text/html'});
    else if (extension === 'css') res.writeHeader(200, {'Content-Type': 'text/css'});
    else if (extension === 'js') res.writeHeader(200, {'Content-Type': 'text/javascript'});
    else if (extension === 'png') res.writeHeader(200, {'Content-Type': 'image/png'});
    else if (extension === 'jpg') res.writeHeader(200, {'Content-Type': 'image/jpg'});
    else if (extension === 'jpeg') res.writeHeader(200, {'Content-Type': 'image/jpeg'});

    res.end(data);
  });
});

server.listen(process.env.PORT || 8080);
