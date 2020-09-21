var express = require('express');
var app = express();
var port =3000;
// respond with "hello world" when a GET request is made to the homepage
app.get('/',function(request,respond){
	respond.send("<h1>Hello Tannn</h1>");
});

app.listen(port,function(){
	console.log('Sever listening on port'+ port);
})



