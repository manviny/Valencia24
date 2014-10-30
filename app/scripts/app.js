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
    'manviny.mny-leaflet',
    'ngCordova'
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
      .when('/share', {
        templateUrl: 'views/share.html',
        controller: 'ShareCtrl'
      })
      .when('/lit', {
        templateUrl: 'views/lit.html',
        controller: 'LitCtrl'
      })
      .when('/splash', {
        templateUrl: 'views/splash.html',
        controller: 'SplashCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
