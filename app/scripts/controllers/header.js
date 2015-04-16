'use strict';

/**
 * @ngdoc function
 * @name angularTrainingMvpApp.controller:Header
 * @description
 * # Header
 * Controller of the angularTrainingMvpApp
 */
angular.module('angularTrainingMvpApp')
  .controller('HeaderCtrl',['$scope', '$location', '$stateParams', '$rootScope',function($scope, $location, $stateParams, $rootScope){
    	if(angular.isDefined($stateParams.for)){
    		$scope.applyFor = $stateParams.for.toUpperCase();
    		// Apply a better way to implement this
    		$rootScope.applyForHeading = $scope.applyFor;
    	}
    	
    	$scope.logout = function () {				
            $location.path( "/home" );
    	};
    	$scope.doBack = function(){
    		$window.history.back();
    	}
  }]);
