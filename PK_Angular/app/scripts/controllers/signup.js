'use strict';

/**
 * @ngdoc function
 * @name angularJsexamApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the angularJsexamApp
 */
angular.module('angularJsexamApp')
  .controller('SignupCtrl', [
  	"Data","$scope","$state"
  	, function (Data,$scope,$state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.name=""
    $scope.description=""
    $scope.base_type=""

	console.log($scope.name);
	console.log($scope.description);
	console.log($scope.base_type);

    $scope.saveUserInfo = function(){
    	var dataPromise = Data.setData(
    		'http://127.0.0.1:52273/user',
    		   '&name=' + $scope.name  + 
    		 '&description=' + $scope.description +
    		 '&base_type=' + $scope.base_type 
    		 );
    	dataPromise.then(function(restful){
		    $scope.name =""
		    $scope.description =""
		    $scope.base_type =""
    		}, 	function(reason){}
    		,	function(update){}) 
    }
  }]);