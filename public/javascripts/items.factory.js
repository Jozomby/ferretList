angular.module('items').factory('Items',['$http',function($http){
	var info=
	[
	{
		"seller": "Daniel Lee",
		"price": 187,
		"location": "Provo",
		"item": "Used 3DS bundle",
		"contactInfo": "leechef2010@gmail.com",
		"category": "video games",
		"date": "4 April 2016",
		"condition": "Used",
		"description": "This is a description",
		"photo": "http://vignette1.wikia.nocookie.net/finalfantasy/images/a/af/Nintendo-3ds.jpg/revision/latest?cb=20110929161620"
	},
	{
		"seller": "Sheila Parker",
		"price": 230,
		"location": "Orem",
		"item": "My grandmother's ashes",
		"contactInfo": "(555)555-5555",
		"category": "antiquities",
		"date": "1 March 2012",
		"condition": "Collectible",
		"description": "None needed",
		"photo": "http://www.stardust-memorials.com/assets/images/metalaoraj/mao_104_a.jpg"
	}
	]
}]);
