'use strict';

/**
 * @ngdoc service
 * @name angularTrainingMvpApp.dataService
 * @description
 * # dataService
 * Service in the angularTrainingMvpApp.
 */
angular.module('angularTrainingMvpApp')
  .service('dataService',['$http',function ($http) {
  

  	var searchedData, userData;
  	this.loginCheck = function(log,callback){

  		var loginObj = JSON.parse(localStorage.getItem('loginObject'));

  		if(log.email === loginObj.email && log.password === loginObj.password){
  			this.getData(function(d){
  				userData = d;
  				callback(true);
  			});
  			
  		}else{
  			callback(false);
  		}
  	};

  	this.getData = function(callback){
  		var data;
  		$http.get('json/dummyData.json').success(function(response) {
	       
	        callback(response.xebiaData);
	    });
  	};


	this.setSearchedData = function(val){
		searchedData = val;
	};
	this.getSearchedData = function(){
		return searchedData;
	};
	this.getUserData = function(){
		return userData;
	};

  	
  }]);
