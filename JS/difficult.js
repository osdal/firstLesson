let num = 33721,
	//Преобразование в строку
	numTxt = '' + num,
	//Выбор каждой цифры из строки, преобразование ее в число и перемгожение
	numMlp = ((+numTxt[0])*(+numTxt[1])*(+numTxt[2])*(+numTxt[3])*(+numTxt[4]));
	
	//Возведение в 3-ю степень
let numExp = Math.pow(numMlp, 3);
console.log(numExp);

//Преобразование в строку
numExp = ''+numExp;
//Вывод первых двух цифр
console.log(numExp[0] + numExp[1]);