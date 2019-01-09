'use strict';
angular.module('im.dashboard',['ngRoute'])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/dashboard',{
        templateUrl: 'dashboard/dashboard.html',
        controller: 'dashboardCtrl'
    });
  }])
.controller('dashboardCtrl',[function(){

}]);
