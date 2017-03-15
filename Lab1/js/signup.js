angular.module("myApp").controller("signup", function($scope, $rootScope, $location){
	
	$scope.signup = function (){
		// $scope.register = {
		// 	username : $scope.username,
		// 	password : $scope.password,
		// 	email : $scope.email
		// };
			
		$rootScope.user = $scope.register;
		$location.path("/login");
	}
});