angular.module("cricketaddict", [
	"ngRoute",
	"ngAnimate",
	"matchesControllers",
	"myApp.config"
])
.config(["$routeProvider", '$httpProvider', function($routeProvider,$httpProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "template/home.html"
	});	

	 $httpProvider.defaults.useXDomain = true;
     delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

angular.module('myApp.config', []).constant('HOST','http://localhost:61189');
