"use strict";

myApp.factory('serviceAjax', function ($http) {
	return{
		afficheAll: function(){
			return $http.get("https://jeremie-nizou-todolist-api.herokuapp.com/todos/");
		},
		afficheItem: function(id){
			return $http.get("https://jeremie-nizou-todolist-api.herokuapp.com/todos/" + id);
		},
		modifieItem: function(id, newItem){
			return $http.put("https://jeremie-nizou-todolist-api.herokuapp.com/todos/nom/" + id, newItem);
		},
		modifiePres: function(id, newItem){
			return $http.put("https://jeremie-nizou-todolist-api.herokuapp.com/todos/presentation/" + id, newItem);
		},
		ajouteItem: function(item){
			return $http.post("https://jeremie-nizou-todolist-api.herokuapp.com/todos", item);
		},
		supprimeItem: function(id){
			return $http.delete("https://jeremie-nizou-todolist-api.herokuapp.com/todos/" + id);
		}
	}
});
