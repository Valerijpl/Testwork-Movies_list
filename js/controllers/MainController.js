app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  $scope.watch_later_list = [];
  $scope.status = 'all';
  forecast.success(function(data) {
    $scope.Movies = data;
  });
  $scope.watchLater = function(item){
    $scope.watch_later_list.push(item);
    item.selected_by_user = true;
  };
  $scope.showList = function(){
    $scope.status = 'all';
  };
  $scope.showListOfSelectedFilms = function(){
    $scope.status = 'selected';
  };
  $scope.removeFromSelected = function(item){
    var index = $scope.watch_later_list.indexOf(item);
    $scope.watch_later_list.splice( index, 1 );
  };
}]);
