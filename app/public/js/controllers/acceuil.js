"use strict";

myApp.controller("acceuilCtrl", function($scope) {
	$scope.mail = false;
	$scope.telephone = false;
	$scope.linkedin = false;


	// Fonctions d'affichage des fonctions CONTACT
	$scope.changeMail = function() {
		$scope.mail = !$scope.mail;
		$scope.telephone = false;
		$scope.linkedin = false;
	}

	$scope.changeTelephone = function() {
		$scope.mail = false;
		$scope.telephone = !$scope.telephone;
		$scope.linkedin = false;
	}

	$scope.changeLinkedin = function() {
		$scope.mail = false;
		$scope.telephone = false;
		$scope.linkedin = !$scope.linkedin;
	}




	// Evenement pour copier le mail
	var clipboard = new Clipboard('.btn');
 
	clipboard.on('success', function(e) {
		console.info('Action:', e.action);
		console.info('Text:', e.text);
		console.info('Trigger:', e.trigger);
		alert("Mail copié");
	 
		e.clearSelection();
	});
	 
	clipboard.on('error', function(e) {
		console.error('Action:', e.action);
		console.error('Trigger:', e.trigger);
	});
});