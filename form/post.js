var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/www/index.html')
});

app.use(bodyParser.json());

app.post('/temp',function(req, res){
	var json = req.body;
	console.log("溫度：" + json.temp);   // 在控制台顯示溫度值
	console.log("濕度：" + json.humid);
	}
);

app.get('*', function(req, res) {
  res.status(404);
  res.send('找不到網頁！');
});

app.listen(1234, function(req, res) {
  console.log("網站伺服器在1234埠口開工了！");
});
