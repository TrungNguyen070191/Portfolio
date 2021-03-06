
//Load HTTP module
require('dotenv').config({ path: __dirname + '/.env' });
var bodyParser = require("body-parser"),
  express = require('express'),
  config = require("./common/config"),
  app = express(),
  hostName = process.env.HOSTNAME || config.server.hostName,
  port = process.env.PORT || config.server.port,
  indexRouter = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// maybe delete it when host to internet
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/', indexRouter);

// app.use(function (req, res, next) {
//     if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
//         jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err, decode) {
//             if (err) req.user = undefined;
//             req.user = decode;
//             next();
//         });
//     } else {
//         req.user = undefined;
//         next();
//     }
// });

//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});