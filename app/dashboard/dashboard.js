'use strict';
angular.module('im.dashboard',['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dashboard',{
        templateUrl: 'dashboard/dashboard.html',
        controller: 'dashboardCtrl'
    });
  }])
.controller('dashboardCtrl',['$scope',function($scope){

        $scope.sampledata=[
            {
                id: 1,
                "ponum":"PO20190101001",
                "supplier":"AGS",
                "podate":"2019-01-01",
                "status":"created",
                "paymentstatus":"paid",
                "delivery":"delivered"
            },
            {
                id: 2,
                "ponum":"PO20190101002",
                "supplier":"AGS",
                "podate":"2019-01-01",
                "status":"created",
                "paymentstatus":"paid",
                "delivery":"delivered"
            },
            {
                id: 3,
                "ponum":"PO20190101003",
                "supplier":"AGS",
                "podate":"2019-01-01",
                "status":"created",
                "paymentstatus":"paid",
                "delivery":"delivered"
            },
            {
                id: 4,
                "ponum":"PO20190101004",
                "supplier":"AGS",
                "podate":"2019-01-01",
                "status":"created",
                "paymentstatus":"paid",
                "delivery":"delivered"

            }
        ];

        /*Delete Fuction*/

        $scope.delete = function (index) {
           $scope.sampledata.splice(index,1); 
        }
        $scope.edit = function (index,data) {
            console.log(data);
         }
         $scope.copy = function (index,data) {
            console.log(data);
            var newRow = angular.copy(data);
            $scope.sampledata.push(newRow);
         }
        

}]);
