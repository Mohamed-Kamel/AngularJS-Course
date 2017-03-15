angular.module("myApp").controller("login", function($scope, $rootScope, $location){

	$scope.login = function(){
		
		if($scope.username == $rootScope.user.username && $scope.password == $rootScope.user.password){
			$location.path("/profile");
		}else{
			
			console.log("Error login");
		}
	}
});