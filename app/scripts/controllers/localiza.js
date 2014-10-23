'use strict';

/**
 * @ngdoc function
 * @name valencia24App.controller:LocalizaCtrl
 * @description
 * # LocalizaCtrl
 * Controller of the valencia24App
 */
angular.module('valencia24App')
  .controller('LocalizaCtrl', function ($scope, mnymapa) {

    // initialize map
    mnymapa.setDefaultMap();


    var array = [];
    // array.push({lat: 39.50300178969824, lng: -3.878173828125, focus: true, draggable: false});   
    // array.push({lat: 38.50300178969824, lng: -2.878173828125, focus: true, draggable: false});   

    mnymapa.pushMarkers(array); 
    mnymapa.myPosition();
    // mnymapa.fitMarkers(array); // not reloading map
    
  });
