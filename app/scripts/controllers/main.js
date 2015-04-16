'use strict';

/**
 * @ngdoc function
 * @name angularTrainingMvpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTrainingMvpApp
 */
angular.module('angularTrainingMvpApp')
  .controller('MainCtrl',['$scope', '$location', 'cfpLoadingBar','dataService','$timeout',function($scope, $location, cfpLoadingBar, dataService, $timeout){
		
		$scope.fn_login = function () {		
			cfpLoadingBar.start();
			cfpLoadingBar.inc();
			var userObj = {
				'email' : $scope.email,
				'password' : $scope.password
			}    
			dataService.loginCheck(userObj,function(d){
				$timeout(function(){
					console.debug(d)
					cfpLoadingBar.complete();

					if(d){
						$location.path( "/dashboard" );	
					}
				},100)
				
			})
		   /*
	        Auth.login(userObj).then(function () {
	        	cfpLoadingBar.complete();
	        	var users = [];
    			angular.forEach(xebiaData.all,function(val, index){
    				users.push(val.NAME);				
    			});
    			dataService.setUserData(users);

	        	$location.path( "/dashboard" );	
	        }, function (error) {
		      $scope.error = error.code.split('_')[1]
		      cfpLoadingBar.complete();
		    })*/
		};
		
	}])
