angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('MoviesCtrl', function($scope, Movies) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  // Movies.all().then(function(data){
  //    $scope.movies = data
  //  });
  
  $scope.movies = Movies
})

.controller('MovieDetailCtrl', function($scope, $stateParams, Movies) {
  $scope.movie = Movies.$getRecord($stateParams.movieId);
});

