var express = require("express");
var app     = express();
var path    = require("path");

/* USUAL HTML RENDERING */

app.use(express.static(__dirname + '/dist'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/index.html')); 
});


/* RENDER PUG TEMPLATES

app.set('view engine', 'pug');
app.set('views', __dirname + '/dist');

app.get('/',function(req,res){
  res.render('index',{title : "tlt"});  //title is value which we pass to pug template
}

 */
app.listen(300);

console.log("Running at Port 300");
