'use strict';

/**
 * @ngdoc function
 * @name valencia24App.controller:PortadaCtrl
 * @description
 * # PortadaCtrl
 * Controller of the valencia24App
 */
angular.module('valencia24App')
  .controller('PortadaCtrl', function ($scope, cordova, $cordovaGeolocation) {

	  cordova.ready.then(function () {

	    alert('Cordova is ready');

	        $cordovaGeolocation
		    .getCurrentPosition()
		    .then(function (position) {
		      var lat  = position.coords.latitude
		      var long = position.coords.longitude
		      alert(lat + '  ' + long);
		    }, function(err) {
		      // error
		    });

	  });

    $scope.path = path;							// path to thumbs, audios.. 
    $scope.lits = valencia.lits


  	$scope.goLit = function(index){
  		myNavigator.pushPage('views/lit.html',{litIndex:index})
  	}  

  });
