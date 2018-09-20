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
		"Boku No Hero Academia - Opening 05.mp3",
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
		"Fairy Tail - Opening 01.mp3",
		"Fairy Tail - Opening 02.mp3",
		"Fairy Tail - Opening 03.mp3",
		"Fairy Tail - Opening 04.mp3",
		"Fairy Tail - Opening 05.mp3",
		"Fairy Tail - Opening 06.mp3",
		"Fairy Tail - Opening 07.mp3",
		"Fairy Tail - Opening 08.mp3",
		"Fairy Tail - Opening 09.mp3",
		"Fairy Tail - Opening 10.mp3",
		"Fairy Tail - Opening 11.mp3",
		"Fairy Tail - Opening 12.mp3",
		"Fairy Tail - Opening 13.mp3",
		"Fairy Tail - Opening 14.mp3",
		"Fairy Tail - Opening 15.mp3",
		"Fairy Tail - Opening 16.mp3",
		"Fairy Tail - Opening 17.mp3",
		"Fairy Tail - Opening 18.mp3",
		"Fairy Tail - Opening 19.mp3",
		"Fairy Tail - Opening 20.mp3",
		"Fairy Tail - Opening 21.mp3",
		"Full Metal Alchemist v1 - Opening 01.mp3",
		"Full Metal Alchemist v1 - Opening 02.mp3",
		"Full Metal Alchemist v1 - Opening 03.mp3",
		"Full Metal Alchemist v1 - Opening 04.mp3",
		"Full Metal Alchemist v2 - Opening 01.mp3",
		"Full Metal Alchemist v2 - Opening 02.mp3",
		"Full Metal Alchemist v2 - Opening 03.mp3",
		"Full Metal Alchemist v2 - Opening 04.mp3",
		"Full Metal Alchemist v2 - Opening 05.mp3",
		"Gamers - Opening 01.mp3",
		"Gintama - Opening 01.mp3",
		"Hatsune Miku - Po pi po.mp3",
		"Hikaru No Go - Opening 01.mp3",
		"Hikaru No Go - Opening 02.mp3",
		"Hikaru No Go - Opening 03.mp3",
		"Hokuto No Ken - Opening 01.mp3",
		"Hunter X Hunter 2011 - Ending 01.mp3",
		"Hunter X Hunter 2011 - Opening 01.mp3",
		"Jojo's Bizarre Adventure - Opening 01.mp3",
		"Jojo's Bizarre Adventure - Opening 02.mp3",
		"Jojo's Bizarre Adventure - Opening 03.mp3",
		"Jojo's Bizarre Adventure - Opening 04.mp3",
		"Jojo's Bizarre Adventure - Opening 05.mp3",
		"Jojo's Bizarre Adventure - Opening 06.mp3",
		"Jojo's Bizarre Adventure - Opening 07.mp3",
		"Jojo's Bizarre Adventure - Opening 08.mp3",
		"Katekyo Hitman Reborn - Opening 01.mp3",
		"Katekyo Hitman Reborn - Opening 02.mp3",
		"Katekyo Hitman Reborn - Opening 03.mp3",
		"Katekyo Hitman Reborn - Opening 04.mp3",
		"Katekyo Hitman Reborn - Opening 05.mp3",
		"Katekyo Hitman Reborn - Opening 06.mp3",
		"Katekyo Hitman Reborn - Opening 07.mp3",
		"Katekyo Hitman Reborn - Opening 08.mp3",
		"Made in Abyss - Opening 01.mp3",
		"Naruto - Opening 01.mp3",
		"Naruto - Opening 02.mp3",
		"Naruto - Opening 03.mp3",
		"Naruto - Opening 04.mp3",
		"Naruto - Opening 05.mp3",
		"Naruto - Opening 06.mp3",
		"Naruto - Opening 07.mp3",
		"Naruto - Opening 08.mp3",
		"Naruto - Opening 09.mp3",
		"Naruto Shippuden - Opening 01.mp3",
		"Naruto Shippuden - Opening 02.mp3",
		"Naruto Shippuden - Opening 03.mp3",
		"Naruto Shippuden - Opening 04.mp3",
		"Naruto Shippuden - Opening 05.mp3",
		"Naruto Shippuden - Opening 06.mp3",
		"Naruto Shippuden - Opening 07.mp3",
		"Naruto Shippuden - Opening 08.mp3",
		"Naruto Shippuden - Opening 09.mp3",
		"Naruto Shippuden - Opening 10.mp3",
		"Naruto Shippuden - Opening 11.mp3",
		"Naruto Shippuden - Opening 12.mp3",
		"Naruto Shippuden - Opening 13.mp3",
		"Naruto Shippuden - Opening 14.mp3",
		"Naruto Shippuden - Opening 15.mp3",
		"Naruto Shippuden - Opening 16.mp3",
		"Naruto Shippuden - Opening 17.mp3",
		"Naruto Shippuden - Opening 18.mp3",
		"Naruto Shippuden - Opening 19.mp3",
		"Naruto Shippuden - Opening 20.mp3",
		"No Game No Life - Opening 01.mp3",
		"One Piece - Opening 01.mp3",
		"One Piece - Opening 02.mp3",
		"One Piece - Opening 03.mp3",
		"One Piece - Opening 04.mp3",
		"One Piece - Opening 05.mp3",
		"One Piece - Opening 06.mp3",
		"One Piece - Opening 07.mp3",
		"One Piece - Opening 08.mp3",
		"One Piece - Opening 09.mp3",
		"One Piece - Opening 10.mp3",
		"One Piece - Opening 11.mp3",
		"One Piece - Opening 12.mp3",
		"One Piece - Opening 13.mp3",
		"One Piece - Opening 14.mp3",
		"One Piece - Opening 15.mp3",
		"One Piece - Opening 16.mp3",
		"One Piece - Opening 17.mp3",
		"One Piece - Opening 18.mp3",
		"One Piece - Opening 19.mp3",
		"One Piece - Opening 20.mp3",
		"One Punch Man - Opening 01.mp3",
		"Shigatsu Wa Kimi No Uso - Ending 02.mp3",
		"Shigatsu Wa Kimi No Uso - Opening 01.mp3",
		"Shigatsu Wa Kimi No Uso - Opening 02.mp3",
		"Shingeki No Kyojin - Opening 01.mp3",
		"Shingeki No Kyojin - Opening 02.mp3",
		"Shingeki No Kyojin - Opening 03.mp3",
		"Shingeki No Kyojin - Opening 04.mp3",
		"Soul Eater - Opening 01.mp3",
		"Soul Eater - Opening 02.mp3",
		"Tokyo Ghoul - Opening 01.mp3",
		"Twice - Likey.mp3"
	];
	console.log($scope.list.length);
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