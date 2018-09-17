"use strict";

var myApp = angular.module("myApp", ["ngRoute", "ngCookies", "ngAnimate"]);

myApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
		.when("/todolisteBDD", {
			templateUrl: "views/todolistHome.html",
			controller: "todolistHomeCtrl"
		})
		.when("/todolisteBDD/presentation/:id", {
			templateUrl: "views/todolistPres.html",
			controller: "todolistPresCtrl"
		})
		.when("/todoliste", {
			templateUrl: "views/todolist.html",
			controller: "todolistCtrl"
		})
		.when("/lebonthe", {
			templateUrl: "views/lebonthe.html"
		})
		.when("/music", {
			templateUrl: "views/music.html",
			controller: "musicCtrl"
		})
		.when("/", {
			templateUrl: "views/acceuil.html", 
			controller: "acceuilCtrl"
		})
		.otherwise({
			redirectTo: "/"
		});
}]);
