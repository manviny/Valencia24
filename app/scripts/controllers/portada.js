'use strict';

/**
 * @ngdoc function
 * @name valencia24App.controller:PortadaCtrl
 * @description
 * # PortadaCtrl
 * Controller of the valencia24App
 */
angular.module('valencia24App')
  .controller('PortadaCtrl', function ($scope, cordova, $cordovaGeolocation, $cordovaSpinnerDialog) {

  		 
  	// mi posicion GPS
	  cordova.ready.then(function () {
	  	 $cordovaSpinnerDialog.show("Buscando posición","...");
	        $cordovaGeolocation
		    .getCurrentPosition()
		    .then(function (position) {
		      var lat  = position.coords.latitude;
		      var long = position.coords.longitude;
		      $cordovaSpinnerDialog.hide();
		      alert(lat + '  ' + long);
		    }, function(err) {
		    	alert('error');
		      // error
		    });
	  });



    $scope.path = path;							// path to thumbs, audios.. 
    $scope.lits = valencia.lits

  	$scope.goLit = function(index){
  		myNavigator.pushPage('views/lit.html',{litIndex:index, animation: "fade"})
  	}  

  });
