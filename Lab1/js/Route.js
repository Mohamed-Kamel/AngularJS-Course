angular.module("myApp")
.config(function($routeProvider){
	
	$routeProvider
	

	.when("/profile", {

		templateUrl : "./template/profile.html",
		controller : "profile"

	})



	.when("/login", {

		templateUrl : "./template/login.html",
		controller : "login"

	})



	.when("/signup",{

		templateUrl : "./template/signup.html",
		controller : "signup"
		
	})
});