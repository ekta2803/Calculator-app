

function add(inp1,inp2,callback){
	var result = 0;
	var err = 0;
	 var reg = /^-?\d*(\.\d+)?$/;
	if(!inp1.toString().match(reg) && !inp2.toString().match(reg)){
		console.log("Calculate.js--> if")
		err = 1; //Input 1 or input 2 is not a number 
		callback(err,result);
		
	}
	else{
		console.log("Calculate.js --> else")
		result = parseFloat(inp1) + parseFloat(inp2);
		
		console.log(result);
		callback(err,result);
	}
}

function multiply(inp1,inp2,callback){
	var result = 0;
	var err = 0;
	 var reg = /^-?\d*(\.\d+)?$/;
	if(!inp1.toString().match(reg) && !inp2.toString().match(reg)){
		console.log("Calculate.js--> if")
		err = 1; //Input 1 or input 2 is not a number 
		callback(err,result);
		
	}
	else{
		console.log("Calculate.js --> else")
		result = parseFloat(inp1) * parseFloat(inp2);
		
		console.log(result);
		callback(err,result);
	}
}

function subtract(inp1,inp2,callback){
	var result = 0;
	var err = "";
	 var reg = /^-?\d*(\.\d+)?$/;
	if(!inp1.toString().match(reg) && !inp2.toString().match(reg)){
		console.log("Calculate.js--> if")
		err = 1; // //Input 1 or input 2 is not a number 
		callback(err,result);
		
	}
	else{
		console.log("Calculate.js --> else")
		result = parseFloat(inp1) - parseFloat(inp2);
		console.log(result);
		callback(err,result);
	}
}

function divide(inp1,inp2,callback){
	var result = 0;
	var err = "";
	 var reg = /^-?\d*(\.\d+)?$/;
	if(!inp1.toString().match(reg) && !inp2.toString().match(reg)){
		console.log("Calculate.js--> if")
		err = 1; // //Input 1 or input 2 is not a number 
		callback(err,result);
		
	}
	else if(parseFloat(inp2)==0){
		err = 3;
		callback(err,result);
	}
	else{
		console.log("Calculate.js --> else")
		result = parseFloat(inp1) / parseFloat(inp2);
		console.log(result);
		callback(err,result);
	}
}


exports.subtract=subtract;
exports.add=add;
exports.multiply=multiply
exports.divide=divide;