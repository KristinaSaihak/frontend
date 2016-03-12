function checkUserName (userNameArr, userName) {
	var temporaryVar;
	for (var i = 0; i < 5; i++) {
		if (userNameArr[i] === userName) {
			alert (userName+ ', вы успешно вошли!');
			temporaryVar = 1;
			break;
		}
	}
	if (temporaryVar != 1) {
		alert ('имя пользователя не существует в массиве!!!');
	}
}


var nameArr = [];
var nameArrUpper = [];
for(var  i= 0; i < 5; i++) {
	nameArr.push(prompt ('Введи имя для занесение его в массив', ''));
	nameArrUpper[i] = nameArr[i].toUpperCase();
}
var user = prompt ('Введи имя пользователя', '');
var userUpper = user.toUpperCase();
checkUserName(nameArrUpper, userUpper);
