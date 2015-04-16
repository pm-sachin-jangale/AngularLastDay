'use strict';

/**
 * @ngdoc function
 * @name angularTrainingMvpApp.controller:UserprofileCtrl
 * @description
 * # UserprofileCtrl
 * Controller of the angularTrainingMvpApp
 */
angular.module('angularTrainingMvpApp')
  .controller('UserprofileCtrl',['$scope', 'dataService', function ($scope, dataService) {
    $scope.data = dataService.getSearchedData();
  }]);
