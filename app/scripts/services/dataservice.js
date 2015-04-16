'use strict';

/**
 * @ngdoc service
 * @name angularTrainingMvpApp.dataService
 * @description
 * # dataService
 * Service in the angularTrainingMvpApp.
 */
angular.module('angularTrainingMvpApp')
  .service('dataService', function () {
  	this.loginCheck = function(log,callback){

  		var loginObj = JSON.parse(localStorage.getItem('loginObject'));

  		if(log.email === loginObj.email && log.password === loginObj.password){
  			callback(true);
  		}else{
  			callback(false);
  		}
  	};

  	
  });
