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

    // Posicion del susario
    var userPosition;             

    // Carga al entrar en la app los lits
    if(_.isUndefined(municipio.lits.length)) {
       dpd.lits.get(function (result, err) {
        if(err) return console.log(err);
        municipio.lits = result;
        console.debug("LITS", municipio.lits);
      });   
    }


    /**
     * Carga los list desde el servidor
     * @param  {[type]} result [description]
     * @param  {[type]} err    [description]
     * @return {[type]}        [description]
     */
    var getLits = function() { 
      return municipio.lits; 
      // var deferred = $q.defer();
      // dpd.lits.get(function (result, err) {
      //   if(err) return console.log(err);
      //   municipio.lits = result;
      //   deferred.resolve(municipio.lits);
      // });
      // return deferred.promise;
   }

   /**
    * get Lit by index
    * @param  {[type]} index [description]
    * @return {[type]}       [description]
    */
    var  getLit = function(id) { 
      return _.find(municipio.lits, function(lit) {return lit.id == id;}); 
    }

    /**
     * path to assets in server
     * @return {[type]} [description]
     */
    var  getPaths = function() {return municipio.paths;}
    var  getuserPosition = function() {return userPosition;}


    /**
     * [myPosition adds user position marker to map and fit bounds]
     * @return {[type]} [description]
     */
    var  myPosition = function() {
      var deferred = $q.defer();
        $cordovaGeolocation.getCurrentPosition()
        .then(function (position) {
            userPosition = position.coords;
            deferred.resolve(userPosition);
            }, function(err) {alert(err);}
        ); 
        return deferred.promise;
    }

    var  getLitsCercanos = function(numeroLits) {
          var distancia;
          var puntoMasProximo = 
          _.map(
            _.sortBy(municipio.lits, 
              function(items){
                  // ordena las items por distancia al usuario 
                  distancia = Math.abs(items.coords.lat-(userPosition.latitude)) +  Math.abs(items.coords.lng-(userPosition.longitude));
                  items.dist = distancia;
                  return distancia ;
            })
          )
          return _.first(puntoMasProximo, numeroLits);

    }


    // C.- PUBLIC METHODS
    return {
      myPosition: myPosition,                         // promise of user position
      getPaths: getPaths,
      getLits: getLits,    
      getLit: getLit,
      getLitsCercanos: getLitsCercanos,
      getuserPosition: getuserPosition                // returns variable of user position
    }; 


  });
