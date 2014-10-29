'use strict';

/**
 * @ngdoc service
 * @name valencia24App.p24
 * @description
 * # p24
 * Factory in the valencia24App.
 */
angular.module('valencia24App')
  .factory('p24', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
