"use strict";

myApp.controller("todolistHomeCtrl", function($scope, serviceAjax) {

	var initialisation = function() {
		$scope.toutSelectionne = false;
		$scope.list = [];
		$scope.selectionne = [];
		$scope.edit = [];
		$scope.todo = {};
		$scope.changeTodo = {};
	}

// Fonctions CRUD
	var affiche = function() {
		$scope.encours = true;
		serviceAjax.afficheAll().then(function onSuccess(response) {
			if( response === "err" ) {
				$scope.encours = false;
				alert("Probleme affiche");
			}
			else {
				$scope.encours = false;
				$scope.list = response.data;
				$scope.list.forEach(function(value, key) {
					$scope.selectionne[key] = false;
					$scope.edit[key] = false;
				});
			}
		});
	};

	$scope.ajouterItem = function(todo) {
		serviceAjax.ajouteItem(todo).then(function onSuccess(response) {
			if( response === "err" ) {
				alert("Probleme ajout");
			}
			else {
				$scope.list.push(response.data);
				$scope.todo = {};
				$scope.toutSelectionne = false;
				$scope.selectionne.push(false);
				$scope.edit.push(false);
			}
		});
	};

	$scope.supprime = function(item, index) {
		serviceAjax.supprimeItem(item._id).then(function onSuccess(response) {
			if( response === "err" ) {
				alert("Probleme suppression");
			}
			else {
				{
					$scope.list.splice(index, 1);
					$scope.selectionne.splice(index, 1);
					$scope.edit.splice(index, 1);

					// Si tous les autres item sont sélectionnés, il faut actualiser 'toutSelectionne'
					var nbSelectionne = 0;
					$scope.list.forEach(function(value, key) {
						if ($scope.selectionne[key] === true) {
							nbSelectionne++;
						}
					});
					if(nbSelectionne === $scope.list.length) {
						$scope.toutSelectionne = true;
					}
					if($scope.list.length === 0) {
						$scope.toutSelectionne = false;
					}
				}
			}
		});
	};

	$scope.supprimeToutSelectionne = function() {
		for (var i=$scope.list.length-1; i>=0; i--) {
			if( $scope.selectionne[i] === true ) {
				$scope.supprime($scope.list[i], i);
			}
		}
		$scope.toutSelectionne = false;
	};


// Fonctions sur la selection
	$scope.changeSelectionTotalBouton = function() {
		if( $scope.toutSelectionne === false ){
			$scope.toutSelectionne = true;
			$scope.selectionne.forEach(function(value, key) {
				$scope.selectionne[key] = true;
			});
		}
		else {
			$scope.toutSelectionne = false;
			$scope.selectionne.forEach(function(value, key) {
				$scope.selectionne[key] = false;
			});
		}
	};

	$scope.changeSelectionTotal = function() {
		if( $scope.toutSelectionne === true ){
			$scope.selectionne.forEach(function(value, key) {
				$scope.selectionne[key] = true;
			});
		}
		else {
			$scope.selectionne.forEach(function(value, key) {
				$scope.selectionne[key] = false;
			});
		}
	};

	$scope.changeSelectionIndex = function(index) {
		if( $scope.selectionne[index] === false ){
			$scope.toutSelectionne = false;
		}
		else {
			$scope.toutSelectionne = true;
			$scope.selectionne.forEach(function(value, key) {
				if (value === false) {
					$scope.toutSelectionne = false;
				}
			});
		}
	};


// Fonction modifier
	$scope.modifier = function(index) {
		if( $scope.edit[index] === true) {
			$scope.edit[index] = false;
			$scope.changeTodo = {};
		}
		else {
			$scope.edit.forEach(function(value, key) {
				$scope.edit[key] = false;
			});
			$scope.edit[index] = true;
			$scope.changeTodo.nom = $scope.list[index].nom;
		}
	};

	$scope.confirmer = function(item, index) {
		serviceAjax.modifieItem(item._id, $scope.changeTodo).then(function onSuccess(response) {
			if( response === "err" ) {
				alert("Probleme confirmation");
			}
			else {
				$scope.list[index].nom = $scope.changeTodo.nom;
				$scope.modifier(index);
			}
		});
	};

	initialisation();
	affiche();
	
});
