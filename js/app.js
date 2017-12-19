(function(){
	var a = document.getElementById('a')
	var b = document.getElementById('b')
	var c = document.getElementById('c')
	var btnCalcular = document.getElementById('btn-calcular');
	btnCalcular.addEventListener('click', secondDegreeEquationPositive);
	// a.addEventListener('keyup',secondDegreeEquationPositive);
	// b.addEventListener('keyup',secondDegreeEquationPositive);
	// c.addEventListener('keyup',secondDegreeEquationPositive);
	var numbers = document.getElementsByClassName('numbers');

	for(var i=0; i < numbers.length; i++){
		// numbers[i].addEventListener('keyup',getValueInput);
		numbers[i].addEventListener('keydown',validateNumber);
	}
	function validateNumber(e) {
		if((e.keyCode !== 189 && e.keyCode !== 8) && (e.keyCode < 48 || e.keyCode > 57)){
			e.preventDefault();
		}
	};
	// function getValueInput(){
	// 	var value = this.value;
	// 	console.log(value);
	// };

	function secondDegreeEquationPositive() {
		var valueA = parseInt(a.value);
		var valueB = parseInt(b.value);
		var valueC = parseInt(c.value);
		var numerador = (-1) * (valueB) + (Math.sqrt(Math.pow(valueB, 2) - 4 * (valueA * valueC)));
		var denominador = Number(numerador / (2 * valueA));

		//var result = ((-)*(valueB) +Math.sqrt(Math.pow(valueB, 2)-4*(valueA*valueC))) / (2*valueA);
		console.log(denominador);
	}
})();