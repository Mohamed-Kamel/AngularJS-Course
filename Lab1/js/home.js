angular.module("myApp").controller("home", function($scope, $rootScope, $location, myData){
	

	if($rootScope.user){
		myData.getData().then(function(data){
			console.log(data);
			$scope.products = data;

		}, function(error){

			alert(error.toString());

		});
	}else {
		$location.url("/login");
	}
});