app.factory('forecast', ['$http', function($http) {
  return $http.get('http://api.themoviedb.org/3/list/25633?api_key=0f04bbdc102bbd08c7caca24bb575d45')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
