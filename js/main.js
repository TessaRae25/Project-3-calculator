var calc = document.querySelector('#display');

function displayScreen(x) {
	calc.value += x;

	if(x == 'c') {
		calc.value = '';
	}
}

function solution() {
	x = calc.value;
	x = eval(x);
	calc.value = x;
}

function backspace() {
	var value = calc.value;
	var length = value.length -1;
	var newVariable = value.substring(0,length);
	calc.value = newVariable;
}
