var app = angular.module("MoviesApp", []);

app.controller("MovieController", function($scope, $http) {

	$scope.detailsMovie = function(movie)
	{
		$http.jsonp("http://www.myapifilms.com/imdb?format=JSONP&idIMDB=" + movie.idIMDB + "&callback=JSON_CALLBACK")
		.success(function(movie) {
			$scope.details = movie;
		});
	}

	$scope.favoriteMovies = [];

	$scope.addToFavorites = function(movie) 
	{
		$scope.favoriteMovies.push(movie);
	}

	$scope.searchMovies = function() {
		var title = $scope.searchByTitle;
		$http.jsonp("http://www.myapifilms.com/imdb?title=" + title + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&forceYear=0&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&similarMovies=0&adultSearch=0&callback=JSON_CALLBACK")
	.success(function(response) {
		$scope.movies = response;
	});
	}

	$scope.removeFavoriteMovie = function(movie) 
	{
		var index = $scope.favoriteMovies.indexOf(movie);
		$scope.favoriteMovies.splice(index, 1);
	}

/*
	var movies = [
		{title: "Avatar", rating: "PG-13", year: 2009, plot: "Some cool blue guys re-enact Pocahontas"},
		{title: "Star Wars VII", rating: "PG-13", year: 2015, plot: "Plot unknown."},
		{title: "Star Trek", rating: "PG-13", year: 2013, plot: "Spock is cool."}
	];

	$scope.movies = movies;
	*/


	$scope.addMovie = function() 
	{
		// alert($scope.movie.title);

		var newMovie = {
			title: $scope.movie.title,
			rating: $scope.movie.rating,
			year: $scope.movie.year,
			plot: $scope.movie.plot
		};

		$scope.movies.push(newMovie);
	}

	$scope.removeMovie = function(movie) 
	{
		var index = $scope.movies.indexOf(movie);
		$scope.movies.splice(index, 1);
	}

	$scope.selectMovie = function(movie)
	{
		$scope.movie = movie;
	}

	$scope.updateMovie = function(movie) 
	{
		alert($scope.movie.title);
	}
});