angular.module('starter.services', [])

.factory('Movies', function($firebaseArray,$q) {
 

var itemsRef = new Firebase("https://blazing-torch-2772.firebaseio.com/movies");

  return $firebaseArray(itemsRef.orderByChild("date"));

// var deffered = $q.defer();
//   var movies = [];  
//   var movieService = {};
//   movieService.all = function() {
//     $http.get('/data/movies.json')
//     .success(function (d) {
//       movies = d;
//       deffered.resolve(movies);
//     });
//     return deffered.promise;
//   };
//   movieService.get = function(movieId) {
//       for (var i = 0; i < movies.length; i++) {
//         if (movies[i].id === parseInt(movieId)) {
//           return movies[i];
//         }
//       }
//       return null;
//     }
//   return movieService;

});
