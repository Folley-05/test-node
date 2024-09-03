const express = require('express');
const app = express();
const router = express.Router();
const path = __dirname + '/views/';
const port = 5000;

// add routes
router.use(function (req, res, next) {
  console.log('/' + req.method);
  next();
});
router.get('/', function (req, res) {
  res.sendFile(path + 'index.html');
});
router.get('/bmc', function (req, res) {
  res.sendFile(path + 'bmc.html');
});

// mount assests
app.use(express.static(path));
app.use('/', router);

// launch app

app.listen(port, function () {
  console.log('listening on port ' + port);
})
