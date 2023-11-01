const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

const path = __dirname + '/views/';
const port = 8081;
app.use(cors());
router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});
router.get('/dom', function(req,res){
  res.sendFile(path + 'dom.html');
});

router.get('/sharks', function(req,res){
  res.sendFile(path + 'sharks.html');
});
router.get('/traktor', function(req,res){
  res.sendFile(path + 'traktor.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log(`http://127.0.0.1:${port}`)
})



