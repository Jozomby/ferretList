angular.module('ferretList', [])
.controller('MainCtrl', [
	'$scope', '$http',
	function($scope,$http){
		$scope.test = "Hello World!";
		var partial = "{location: 'Provo'}";
		$scope.getItems = function(partial) {
			return $http.post('/items', partial).success(function(data){
				$scope.items = data;
				console.log(data);
			});
		};
		$scope.getItems();
	}
]);
