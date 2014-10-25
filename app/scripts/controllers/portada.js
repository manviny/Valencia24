'use strict';

/**
 * @ngdoc function
 * @name valencia24App.controller:PortadaCtrl
 * @description
 * # PortadaCtrl
 * Controller of the valencia24App
 */
angular.module('valencia24App')
  .controller('PortadaCtrl', function ($scope) {

    console.debug("valencia",valencia);

	// path to thumbs, audios.. 
	// in appInfo.js  
	// images/th_  || android filesystem// 
    $scope.path = path;		


    $scope.lits = valencia.lits


  	$scope.goLit = function(index){
  		myNavigator.pushPage('views/lit.html',{litIndex:index})
  	}  

  });
