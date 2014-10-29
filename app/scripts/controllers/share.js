'use strict';

/**
 * @ngdoc function
 * @name valencia24App.controller:ShareCtrl
 * @description
 * # ShareCtrl
 * Controller of the valencia24App
 */
angular.module('valencia24App')
  .controller('ShareCtrl', function ($scope, $cordovaSocialSharing) {

 
  	$scope.WhatsApp = function(){
	  $cordovaSocialSharing
	    .shareViaWhatsApp('desde valencia24', 'http://www.patrimonio24.com/site/assets/files/15764/alsol.png', 'http://patrimonio24.com')
	    .then(function(result) {
	      // Success! 
	    }, function(err) {
	      // An error occured. Show a message to the user
	    });
	}


  });
