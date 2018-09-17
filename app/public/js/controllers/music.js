"use strict";

myApp.controller('musicCtrl', [ '$scope', function($scope) {
	$scope.indice = 0;
	$scope.list = [
		"Air Gear - Opening 01.mp3",
		"Assassination Classroom - Opening 01.mp3",
		"Assassination Classroom - Opening 02.mp3",
		"Black Clover - Opening 01.mp3",
		"Black Clover - Opening 02.mp3",
		"Black Clover - Opening 03.mp3",
		"Bleach - Opening 01.mp3",
		"Bleach - Opening 02.mp3",
		"Bleach - Opening 03.mp3",
		"Bleach - Opening 04.mp3",
		"Bleach - Opening 05.mp3",
		"Bleach - Opening 06.mp3",
		"Bleach - Opening 07.mp3",
		"Bleach - Opening 08.mp3",
		"Bleach - Opening 09.mp3",
		"Bleach - Opening 10.mp3",
		"Bleach - Opening 11.mp3",
		"Bleach - Opening 12.mp3",
		"Bleach - Opening 13.mp3",
		"Bleach - Opening 14.mp3",
		"Bleach - Opening 15.mp3",
		"Boku No Hero Academia - Opening 01.mp3",
		"Boku No Hero Academia - Opening 02.mp3",
		"Boku No Hero Academia - Opening 03.mp3",
		"Boku No Hero Academia - Opening 04.mp3",
		"Boruto - Opening 01.mp3",
		"Boruto - Opening 02.mp3",
		"Boruto - Opening 03.mp3",
		"Btooom! - Opening 01.mp3",
		"Code Geass - Opening 01.mp3",
		"Code Geass - Opening 02.mp3",
		"Code Geass - Opening 03.mp3",
		"Code Geass - Opening 04.mp3",
		"Code Geass - Opening 05.mp3",
		"D Gray Man - Opening 01.mp3",
		"D Gray Man - Opening 02.mp3",
		"D Gray Man - Opening 03.mp3",
		"D Gray Man - Opening 04.mp3",
		"D Gray Man - Opening 05.mp3",
		"Death Note - Opening 01.mp3",
		"Death Note - Opening 02.mp3",
		"Death Parade - Opening 01.mp3",
		"Dragon Ball - Opening 01.mp3",
		"Dragon Ball GT - Opening 01.mp3",
		"Dragon Ball Kai - Ending 01.mp3",
		"Dragon Ball Kai - Opening 01.mp3",
		"Dragon Ball Kai - Opening 02.mp3",
		"Dragon Ball Super - Ultimate Battle Song.mp3",
		"Dragon Ball Z - Opening 01.mp3",
		"Dragon Ball Z - Opening 02.mp3",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	];
	$scope.song = $scope.list[0];

	// Bouton next
	$scope.next = function() {
		if ($scope.indice === $scope.list.length-1) {
			$scope.indice = 0;
		}
		else {
			$scope.indice ++;	
		}
		$scope.reloadSong();
	}

	// Bouton prev
	$scope.prev = function() {
		if ($scope.indice === 0) {
			$scope.indice = $scope.list.length-1;
		}
		else {
			$scope.indice --;	
		}
		$scope.reloadSong();
	}

	// Quand on clique sur le titre d'une chanson
	$scope.changeSong = function(song, index) {
		$scope.song = song;
		$scope.indice = index;

		$scope.reloadSong();
	}

	// Quand on a cliqué sur le bouton next ou prev
	$scope.reloadSong = function() {
		$scope.song = $scope.list[$scope.indice];
		document.getElementById("player").load();
	}


	// Quand la chanson se termine
	document.getElementById("player").addEventListener('ended', function() {
		if ($scope.indice === $scope.list.length-1) {
			$scope.indice = 0;
		}
		else {
			$scope.indice ++;	
		}

		$scope.song = $scope.list[$scope.indice];
		$scope.$apply();
		document.getElementById("player").load();
	});
}]);