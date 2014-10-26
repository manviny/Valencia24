'use strict';

/**
 * @ngdoc service
 * @name valencia24App.cordova
 * @description
 * # cordova
 * Factory in the valencia24App.
 */
angular.module('valencia24App')
  .factory('cordova', function ($q, $window) {

      var d = $q.defer(),  
      resolved = false;

      var self = this;  
      this.ready = d.promise;

      document.addEventListener('deviceready', function () {
          alert('deviceready fired');
          resolved = true;
          d.resolve($window.cordova);
      });

      // Check to make sure we didn't miss the
      // event (just in case)
      setTimeout(function () {  
          if (!resolved) {
              if ($window.cordova) d.resolve($window.cordova);
          }
      }, 3000);

      // Public API here
      return this;  

  });
