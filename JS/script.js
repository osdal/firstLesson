var summMonth = prompt('Ваш бюджет на месяц?'),
	nameShop = prompt('Название вашего магазина?');

mainList = {
	summMonth: '',
	nameShop: "",
	shopGoods: ['Aplle', 'Milk'],
	employers: {
		director: 'Adam Smith',
		worker: 'John Walker',
		keeper: 'Jack Sparrow'
	},
	open: true
}

var shopGoods = [prompt('Какой тип товаров будем продавать?'),
				 prompt('Какой тип товаров будем продавать?'),
				 prompt('Какой тип товаров будем продавать?')];

// Бюджет за 1 день
alert('Бюджет за 1 день = '+ summMonth/30);
