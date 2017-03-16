angular.module("myApp").controller("profile", function($scope,$rootScope, $location){
	if(!$rootScope.user){
		$location.url("/login");
	}
});