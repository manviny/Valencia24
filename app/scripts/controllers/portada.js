'use strict';

/**
 * @ngdoc function
 * @name valencia24App.controller:PortadaCtrl
 * @description
 * # PortadaCtrl
 * Controller of the valencia24App
 */
angular.module('valencia24App')
  .controller('PortadaCtrl', function ($scope, cordova) {

	  cordova.ready.then(function () {
	      alert('Cordova is ready');
	  });

    $scope.path = path;							// path to thumbs, audios.. 
    $scope.lits = valencia.lits


  	$scope.goLit = function(index){
  		myNavigator.pushPage('views/lit.html',{litIndex:index})
  	}  

  });
