let summMonth = prompt('Ваш бюджет на месяц?'),
	nameShop = prompt('Название вашего магазина?'),
	mainList = {
	summMonth: summMonth,
	nameShop: nameShop,
	shopGoods: [],
	employers: {
		director: 'Adam Smith',
		worker: 'John Walker',
		keeper: 'Jack Sparrow'
	},
	open: true,
	},
	time = 32;

for(let i = 0; i < 5; i++) {

	let a = prompt('Какой тип товаров будем продавать?');
	
	if ((typeof(a))  === 'string' && (typeof(a))  != null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		console.log('Вы ввели неправильное название товара');
		i--;
	}
}

/*for(let i = 5; i > 0; i--) {

	let a = prompt('Какой тип товаров будем продавать?');
	
	if ((typeof(a))  === 'string' && (typeof(a))  != null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		console.log('Вы ввели неправильное название товара');
		i++;
	}
}*/

if (time < 0) {
	console.log('Такого не может быть');
} else if (time > 0 && time < 20) {
		console.log('Время работать');
	} else if (time < 24) {
		console.log('Уже поздно');
	} else {
		console.log('В сутках только 24 часа');
	}


// Бюджет за 1 день
alert('Бюджет за 1 день = '+ mainList.summMonth/30);

console.log(mainList);
