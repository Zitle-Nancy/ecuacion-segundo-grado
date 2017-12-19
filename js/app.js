(function(){

	var valueA;
	var valueB;
	var valueC;
	var a = document.getElementById('a');
	var b = document.getElementById('b');
	var c = document.getElementById('c');
	// var c = parseInt(document.getElementById('c').value); // porque no se puede
	var x1 = document.getElementById('x1');
	var x2 = document.getElementById('x2');
	var numbers = document.getElementsByClassName('numbers');
	var btnCalcular = document.getElementById('btn-calcular');
	btnCalcular.addEventListener('click', secondDegreeEquationResult);
	for(var i=0; i < numbers.length; i++){
		numbers[i].addEventListener('keydown',validateNumber);
	}
	
	function validateNumber(e) {
		if((e.keyCode !== 189 && e.keyCode !== 8) && (e.keyCode < 48 || e.keyCode > 57)){
			e.preventDefault();
		}
	};
	// function convertToNumber(a) {
	// 	console.log(this.value);
	// 	valueA = Number(this.value);
	// 	// valueB = Number(b.value); 
	// 	// valueC = Number(c.value);
	// 	// secondDegreeEquationResultPositive(valueA, valueB, valueC);
	// };

	function secondDegreeEquationResult() {
		valueA = Number(a.value);
		valueB = Number(b.value); 
		valueC = Number(c.value);
		var discriminate = Math.sqrt(Math.pow(valueB, 2) - 4 * (valueA * valueC));
		var numeratorPositive = (-1) * (valueB) + discriminate;
		var numeratorNegative = (-1) * (valueB) - discriminate;
		var denominador = (2 * valueA);
		var resultX1 = numeratorPositive / denominador;
		var resultX2 = numeratorNegative / denominador;
		x1.innerText = resultX1;
		x2.innerText = resultX2;
		
	};
})();