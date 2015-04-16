'use strict';

/**
 * @ngdoc function
 * @name angularTrainingMvpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTrainingMvpApp
 */
angular.module('angularTrainingMvpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
