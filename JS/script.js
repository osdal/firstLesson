var summMonth = prompt('Ваш бюджет на месяц?'),
	nameShop = prompt('Название вашего магазина?'),
	shopGoods = [prompt('Какой тип товаров будем продавать?'),
				 	 prompt('Какой тип товаров будем продавать?'),
				 	 prompt('Какой тип товаров будем продавать?')];
	

var mainList = {
	summMonth: summMonth,
	nameShop: nameShop,
	shopGoods: shopGoods,
	employers: {
		director: 'Adam Smith',
		worker: 'John Walker',
		keeper: 'Jack Sparrow'
	},
	open: true
}

// Бюджет за 1 день
alert('Бюджет за 1 день = '+ mainList.summMonth/30);

console.log(mainList);
