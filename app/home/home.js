'use strict';
angular.module('im.home',['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
 
    $routeProvider.when('/home',{        
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'        
    });
  }])
.controller('HomeCtrl',[function(){
    
}]);