/**
 * http://usejsdoc.org/
 */

const express = require("express");
const app = express();
 
app.get('/', function(req,res){
	res.send('hello world');
});

app.listen(3000,()=> console.log('Listening on port 300'));