'use strict';

/**
 * @ngdoc filter
 * @name valencia24App.filter:enKm
 * @function
 * @description
 * # enKm
 * Filter in the valencia24App.
 */
angular.module('valencia24App')
  .filter('enKm', function () {
    return function(distancia) {
        if (distancia == "" || distancia == null) return "";
        if(distancia<0.01) return  (distancia*1000).toFixed(0) + ' m.';
        return  (distancia*100).toFixed(1) + ' km.';
    }
  });
