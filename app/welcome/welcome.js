'use strict';

angular.module('myApp.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'welcome/welcome.html',
        controller: 'WelcomeCtrl'
    });
}])

.controller('WelcomeCtrl', ['$scope','$firebase','CommonProp', function($scope,$firebase,CommonProp) {
  $scope.username = CommonProp.getUser();
  var firebaseObj = new Firebase("https://tutsplus-angularapp.firebaseio.com/Articles");
      
         
  var sync = $firebase(firebaseObj);

  $scope.articles = sync.$asArray();
  
  
}]);


