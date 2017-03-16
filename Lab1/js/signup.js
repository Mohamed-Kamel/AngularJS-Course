angular.module("myApp").controller("signup", function($scope, $rootScope, $location){
	
	$scope.signup = function (){
		// $scope.register = {
		// 	username : $scope.username,
		// 	password : $scope.password,
		// 	email : $scope.email
		// };
		
		if($scope.signupForm.$valid){
			$rootScope.user = $scope.register;
			$location.url("/login");
		}else{
			$scope.submitSignup = true;
		}
	}
});