'use strict';

/**
 * @ngdoc function
 * @name valencia24App.controller:LitCtrl
 * @description
 * # LitCtrl
 * Controller of the valencia24App
 */
angular.module('valencia24App')
  .controller('LitCtrl', function ($scope, $cordovaMedia, cordova) {
   
    $scope.path = path;																                              // path to thumbs, audios.. 
  	$scope.lit =  valencia.lits[myNavigator.getCurrentPage().options.litIndex];		  // datos del lit actual


    // Crea objecto de audio
    try {
        var mediaSource = $cordovaMedia.newMedia($scope.path.audios + $scope.lit.media + '.mp3');
        var promise = mediaSource.promise;
        var mediaStatus = mediaSource.mediaStatus;
        var media = mediaSource.media;
        $cordovaMedia.play(media);
      
        // $cordovaMedia.play(media); 

    } catch (exception) {

        // this code handles exceptions
        console.debug("No es un telefono, volvemos pq no puede ejecutar audio","salir");

    } finally {
        // this code always gets executed
    }


    //detecta una vez que hemos vuelto a la pagina que llama
    myNavigator.once("postpop", function(event){
      console.debug("event",event);
      $cordovaMedia.release(media);
    });

    //detecta una vez que hemos cambiado a otra pagina
    tabbar.on('prechange', function(event) {
      $cordovaMedia.release(media);
      console.debug("event",event);
      // event.cancel();
    });



    $scope.play = function(){$cordovaMedia.play(media); }
    $scope.pause = function(){$cordovaMedia.pause(media);}
    $scope.stop = function(){$cordovaMedia.stop(media);}



 
  });
