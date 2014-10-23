'use strict';

/**
 * @ngdoc overview
 * @name valencia24App
 * @description
 * # valencia24App
 *
 * Main module of the application.
 */
angular
  .module('valencia24App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'onsen',
    'manviny.mny-leaflet'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/localiza', {
        templateUrl: 'views/localiza.html',
        controller: 'LocalizaCtrl'
      })
      .when('/portada', {
        templateUrl: 'views/portada.html',
        controller: 'PortadaCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
