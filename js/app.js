(function(){

	var a = document.getElementById('a');
	var b = document.getElementById('b');
	var c = document.getElementById('c');
	// var x1 = document.getElementById('x1');
	// var x2 = document.getElementById('x2');
	var numbers = document.getElementsByClassName('numbers');
	var btnCalcular = document.getElementById('btn-calcular');
	btnCalcular.addEventListener('click', calculate);
	for(var i=0; i < numbers.length; i++){
		numbers[i].addEventListener('keydown',validateNumber);
	}
	
	function validateNumber(e) {
		if((e.keyCode !== 189 && e.keyCode !== 8) && (e.keyCode < 48 || e.keyCode > 57)){
			e.preventDefault();
		}
	};
	function calculate(e) {
		e.preventDefault();
		secondDegreeEquationResult(a,b,c);
	}
	function secondDegreeEquationResult(a,b,c){
		let valueA = Number(a.value);
		let valueB = Number(b.value); 
		let valueC = Number(c.value);
		let radicando = Math.pow(valueB, 2) - 4 * (valueA * valueC);
		let result = {
			x1:"",
			x2:"",
			message:""
		}
		let discriminate = Math.sqrt(radicando);
		let numeratorPositive = (-1) * (valueB) + discriminate;
		let numeratorNegative = (-1) * (valueB) - discriminate;
		let denominator = (2 * valueA);
		if(radicando < 0){
			result.message = 'El resultado de la raiz cuadrada es negativa';
			result.x1 = 'No hay solución';
			result.x2 = 'No hay solución';
			return result;
		}else {
			result.message = "Exit";
			result.x1 = (numeratorPositive / denominator);
			result.x2 = (numeratorNegative / denominator);
		}
		if(valueA === 0){
			result.message = 'Todo numero dividido por cero es un error';
			result.x1 = 'Error';
			result.x2 = 'Error';
			return result;
		}else {
			result.message = "Exit";
			result.x1 = (numeratorPositive / denominator);
			result.x2 = (numeratorNegative / denominator);
		}
		return result;	
	};
	// secondDegreeEquationResult(a,b,c);
})();