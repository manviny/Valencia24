'use strict';

/**
 * @ngdoc function
 * @name valencia24App.controller:LitCtrl
 * @description
 * # LitCtrl
 * Controller of the valencia24App
 */
angular.module('valencia24App')
  .controller('LitCtrl', function ($scope, $cordovaMedia) {
   
    $scope.path = path;																// path to thumbs, audios.. 

  	$scope.lit =  valencia.lits[myNavigator.getCurrentPage().options.litIndex];		// datos del lit actual

  	// variables audio limpias
    var my_media = null;
    var mediaTimer = null;

    // carga el audio y play
    console.debug("",$scope.path.audios + $scope.lit.audio);


    var src =  $scope.path.audios + $scope.lit.audio;

    var mediaSource = $cordovaMedia.newMedia(src);
    var promise = mediaSource.promise;
    var mediaStatus = mediaSource.mediaStatus;
    var media = mediaSource.media;

    $cordovaMedia.play(media);


console.debug("audio", $scope.path.audios + $scope.lit.audio);
  });
