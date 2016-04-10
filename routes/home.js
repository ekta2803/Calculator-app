var ejs = require("ejs");
var calc = require("./calculate");


function index(req,res) {

	ejs.renderFile('./views/index.ejs',function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

function calci(req,res) {
	var op = req.param("op");
	var inp1 = req.param("input1");
	var inp2 = req.param('input2');
	if(inp1=="" || inp2==""){
		ejs.renderFile('./views/index.ejs', { invalid: 4 } , function(err, results) {
	        // render on success
	        if (!err) {
	            res.end(results);
	        }
	        // render or error
	        else {
	            res.end('An error occurred');
	            console.log(err);
	        }
	    });
	}else{
	if(op=='add'){
		add(req,res)
	}
	if(op=='subtract'){
		subtract(req,res);
	}
	if(op=='multiply'){
		multiply(req,res);
	}
	if(op=='divide'){
		divide(req,res);
	}
	}
	if(op=='clear'){
		ejs.renderFile('./views/index.ejs', function(err, results) {
	        // render on success
	        if (!err) {
	            res.end(results);
	        }
	        // render or error
	        else {
	            res.end('An error occurred');
	            console.log(err);
	        }
	    });
	}
}

function add(req,res) {
	console.log('inside add function');
	var inp1 = req.param("input1");
	var inp2 = req.param('input2');
	inp2 = inp2.toString().replace(/\,/g,"");
	console.log(inp1+"-->"+inp2);
	calc.add(inp1,inp2,function(err,results){
		if(err!=0){
			console.log('Error '+err);
			ejs.renderFile('./views/index.ejs', { invalid: err } , function(err, results) {
		        // render on success
		        if (!err) {
		            res.end(results);
		        }
		        // render or error
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
		}
		else 
		{		
				console.log("Result --> "+results)
				ejs.renderFile('./views/index.ejs', { results: results, inp1 : inp1, inp2 : inp2, invalid: err } , function(err, results) {
			        // render on success
			        if (!err) {
			            res.end(results);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });
			}
	});
	
}

function multiply(req,res) {
	console.log('inside multiply function');
	var inp1 = req.param("input1");
	var inp2 = req.param('input2');
	inp2 = inp2.toString().replace(/\,/g,"");
	console.log(inp1+"-->"+inp2);
	calc.multiply(inp1,inp2,function(err,results){
		if(err!=0){
			console.log('Error '+err);
			ejs.renderFile('./views/index.ejs', { invalid: err } , function(err, results) {
		        // render on success
		        if (!err) {
		            res.end(results);
		        }
		        // render or error
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
		}
		else 
		{		
				console.log("Result --> "+results)
				ejs.renderFile('./views/index.ejs', { results: results, inp1 : inp1, inp2 : inp2, invalid: err } , function(err, results) {
			        // render on success
			        if (!err) {
			            res.end(results);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });
			}
	});
	
}

function subtract(req,res) {
	console.log('inside add function');
	var inp1 = req.param("input1");
	var inp2 = req.param('input2');
	inp2 = inp2.toString().replace(/\,/g,"");
	console.log(inp1+"-->"+inp2);
	calc.subtract(inp1,inp2,function(err,results){
		if(err!=0){
			console.log('Error '+err);
			ejs.renderFile('./views/index.ejs', { invalid: err } , function(err, results) {
		        // render on success
		        if (!err) {
		            res.end(results);
		        }
		        // render or error
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
		}
		else 
		{		
				console.log("Result --> "+results)
				ejs.renderFile('./views/index.ejs', { results: results, inp1 : inp1, inp2 : inp2, invalid: err } , function(err, results) {
			        // render on success
			        if (!err) {
			            res.end(results);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });
			}
	});
	
}

function divide(req,res) {
	console.log('inside divide function');
	var inp1 = req.param("input1");
	var inp2 = req.param('input2');
	inp2 = inp2.toString().replace(/\,/g,"");
	console.log(inp1+"-->"+inp2);
	calc.divide(inp1,inp2,function(err,results){
		if(err!=0){
			console.log('Error '+err);
			ejs.renderFile('./views/index.ejs', { invalid: err } , function(err, results) {
		        // render on success
		        if (!err) {
		            res.end(results);
		        }
		        // render or error
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
		}
		else 
		{		
				console.log("Result --> "+results)
				ejs.renderFile('./views/index.ejs', { results: results, inp1 : inp1, inp2 : inp2, invalid: err } , function(err, results) {
			        // render on success
			        if (!err) {
			            res.end(results);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });
			}
	});

}

exports.subtract=subtract;
exports.calci=calci;
exports.add=add;
exports.index=index;
exports.multiply=multiply;
exports.divide=divide;