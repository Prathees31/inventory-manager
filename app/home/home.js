'use strict';
angular.module('im.home',['ngRoute'])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/home',{
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
  }])
.controller('HomeCtrl',['$scope','$location',function($scope,$location){

    $scope.SignIn = function(e){
        e.preventDefault();
        var username = $scope.user.email;
        var password = $scope.user.password;
        if (username == "test@im.com" && password == "test" ) {
            console.log("success");
            $location.path('/dashboard');
        } else {
            console.log("failure");
        }

     }
}]);
