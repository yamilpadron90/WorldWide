'use strict';

/**
 * @ngdoc overview
 * @name worldWideApp
 * @description
 * # worldWideApp
 *
 * Main module of the application.
 */
angular
  .module('worldWideApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })   
      .when('/charter', {
        templateUrl: 'views/charter.html',
        controller: 'CharterCtrl',
        controllerAs: 'charter'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
