'use strict';

/**
 * @ngdoc function
 * @name valencia24App.controller:LitCtrl
 * @description
 * # LitCtrl
 * Controller of the valencia24App
 */
angular.module('valencia24App')
  .controller('LitCtrl', function ($scope) {
   
    $scope.path = path;																// path to thumbs, audios.. 

  	$scope.lit =  valencia.lits[myNavigator.getCurrentPage().options.litIndex];		// datos del lit actual

  	// variables audio limpias
    var my_media = null;
    var mediaTimer = null;

    // carga el audio y play
    // my_media = new Media( $scope.path.audios + $scope.lit.audio );
    // my_media.play();  

console.debug("audio", $scope.path.audios + $scope.lit.audio);
  });
