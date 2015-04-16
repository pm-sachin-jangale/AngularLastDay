'use strict';

/**
 * @ngdoc function
 * @name angularTrainingMvpApp.controller:DashboardCtrl
 * @description
 * # DashboardctrlCtrl
 * Controller of the angularTrainingMvpApp
 */
angular.module('angularTrainingMvpApp')
  .controller('DashboardCtrl', function ($scope) {
   	$//scope.users = dataService.getUserData();
   	$scope.fn_profileSearch = function(){
   		if(!$scope.searchContent){
   			return false;
   		}else{
   			
   			var xebiaId, xebeeName = $scope.searchContent;				
   			angular.forEach(xebiaData.all,function(val, index){
   				if(xebeeName == val.NAME){
   					xebiaId = val.ID;
   					dataService.setSearchedData(val);
   					return false
   				}
   			});		
   			if(!dataService.getSearchedData()){
   				alert("No Data Matched")
   				return false;
   			}
   			$location.path( "/profile/"+xebiaId );
   		}

   		
   	};
  });
