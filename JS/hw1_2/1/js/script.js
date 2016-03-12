
function intPow (num,deg) {
	var rez=1;
	switch(num) {
		case  0:
			if (deg <= 0){
					alert ('0 в степени deg<0 - не определен');
					rez = undefined;
				} else {
 					rez = 0;
				}
			return rez;
		default:
				if (deg > 0) {
					for (var i = 0; i < deg; i++)
 	 					rez *= num;
 	 				return rez;
 	 			}
 	 			if (deg < 0) {
					deg*=-1;
					for(var i = 0; i < deg; i++)
	 					rez *= num;
 					rez = 1/rez;
 					return rez;
 				}
 				else {
 					rez=1;
 					return rez;
 				}

	}
}


var number = prompt('Введите число для возведение в степень','');
var degree = prompt('Введите степень','');
console.log('number',number);
console.log('degree',degree);
var rezult = intPow (number,degree);
console.log('rezult',rezult);