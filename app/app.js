'use strict';

// Declare app level module which depends on views, and core components
angular.module('inverterManager', [
  'ngRoute',
  'im.home',
  'im.dashboard'
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider.otherwise(
    {
      redirectTo: '/home'}
    );

}]);
