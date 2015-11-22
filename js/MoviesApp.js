var app = angular.module("MoviesApp", []);

app.controller("MovieController", function($scope, $http) {

	var movies = [
		{title: "Avatar", rating: "PG-13", year: 2009, plot: "Some cool blue guys re-enact Pocahontas"},
		{title: "Star Wars VII", rating: "PG-13", year: 2015, plot: "Plot unknown."},
		{title: "Star Trek", rating: "PG-13", year: 2013, plot: "Spock is cool."}
	];

	$scope.movies = movies;

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