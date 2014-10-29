'use strict';

/**
 * @ngdoc function
 * @name valencia24App.controller:PortadaCtrl
 * @description
 * # PortadaCtrl
 * Controller of the valencia24App
 */
angular.module('valencia24App')
  .controller('PortadaCtrl', function ($scope, p24, cordova, $cordovaGeolocation, $cordovaSpinnerDialog) {


        // Cordova event handler
        // $cordovaSpinnerDialog.show("Cargando cordova","");

	 
  	// mi posicion GPS
	  // cordova.ready.then(function () {
	  // 	 $cordovaSpinnerDialog.show("Buscando posición","...");
	  //       $cordovaGeolocation
		 //    .getCurrentPosition()
		 //    .then(function (position) {
		 //      var lat  = position.coords.latitude;
		 //      var long = position.coords.longitude;
		 //      $cordovaSpinnerDialog.hide();
		 //      alert(lat + '  ' + long);
		 //    }, function(err) {
		 //    	alert(err);
		 //      // error
		 //    });
	  // });



    $scope.path = p24.getPaths();										// path to thumbs, audios.. 
	
	p24.getLits()
	.then(function(response){$scope.lits = response;});
	
	p24.myPosition()
	.then(function(response){ $scope.myPosition = response; })


  	$scope.goLit = function(index){
  		myNavigator.pushPage('views/lit.html',{litIndex:index, animation: "fade"})
  	}  

  });
