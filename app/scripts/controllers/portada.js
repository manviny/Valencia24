'use strict';

/**
 * @ngdoc function
 * @name valencia24App.controller:PortadaCtrl
 * @description
 * # PortadaCtrl
 * Controller of the valencia24App
 */
angular.module('valencia24App')
  .controller('PortadaCtrl', function ($scope, p24, cordova, $cordovaGeolocation, $cordovaSpinnerDialog, mnymapa) {



    $scope.path = p24.getPaths();										// path to thumbs, audios.. 
	
    $scope.muestraMapa = true;

    // initialize map
    mnymapa.setDefaultMap();
    var array = [];


	/**
	 * get user position and near lits
	 */
	p24.myPosition()
	.then(function(response){ 
		$scope.myPosition = response;
    	array.push({lat: $scope.myPosition.latitude, lng: $scope.myPosition.longitude ,zoom: 17});  		
		$scope.lits = p24.getLitsCercanos(5);

		
		angular.forEach($scope.lits, function(lit, key) {
		  	console.debug(key, lit);
		    array.push(lit.coords); 		  
		});
		    mnymapa.pushMarkers(array); 
		    mnymapa.fitMarkers(array); // not reloading map

	})


  	$scope.goLit = function(id){ 
  		myNavigator.pushPage('views/lit.html',{litID:id, animation: "fade"})
  	}  





 
 
  




	


  });
