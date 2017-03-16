angular.module("myApp").factory("myData", function($http, $q){

	return{
		getData: function(){
			var defer = $q.defer();
			$http({
				
				url : "http://test.w34.co/json/",
				method : "GET",
				

			}).then(function(response){
				
				defer.resolve(response.data);

			}, function(error){
				
				defer.reject(error);

			});

			return defer.promise;

		}
	};
});