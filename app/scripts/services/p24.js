'use strict';

/**
 * @ngdoc service
 * @name valencia24App.p24
 * @description
 * # p24
 * Factory in the valencia24App.
 */
angular.module('valencia24App')
  .factory('p24', function (cordova, $q, $cordovaGeolocation) {

    /**
     * paths to audios and images it can point to /images or the phone filessytem or a web
     * @type {Object}
     */

    var municipio = {
          lits: {},   
          telefonos: { policia: '', bomberos: ''},
          ciudad: { centro: 'Plaza del Ayuntamiento'},
          paths: {
            pictures: 'http://storage.googleapis.com/p24/vlc/img/',
            audios: 'http://storage.googleapis.com/p24/vlc/es/'       //audios en castellano
            // pictures: 'androidFileSystem//images/' 
          }
    }; 


    /**
     * Carga los list desde el servidor
     * @param  {[type]} result [description]
     * @param  {[type]} err    [description]
     * @return {[type]}        [description]
     */
    var  getLits = function() { 
      var deferred = $q.defer();
      dpd.lits.get(function (result, err) {
        if(err) return console.log(err);
        municipio.lits = result;
        deferred.resolve(municipio.lits);
      });
      return deferred.promise;
   }

   /**
    * get Lit by index
    * @param  {[type]} index [description]
    * @return {[type]}       [description]
    */
    var  getLit = function(index) { return municipio.lits[index]; }

    /**
     * path to assets in server
     * @return {[type]} [description]
     */
    var  getPaths = function() {return municipio.paths;}


    /**
     * [myPosition adds user position marker to map and fit bounds]
     * @return {[type]} [description]
     */
    var  myPosition = function() {
      var deferred = $q.defer();
        $cordovaGeolocation.getCurrentPosition()
        .then(function (position) {
            deferred.resolve(position.coords);
            }, function(err) {alert(err);}
        ); 
        return deferred.promise;
    }




    // C.- PUBLIC METHODS
    return {
      myPosition: myPosition,
      getPaths: getPaths,
      getLits: getLits,    
      getLit: getLit    
    }; 


  });
