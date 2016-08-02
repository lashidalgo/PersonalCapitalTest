'use strict';

/**
 * @ngdoc overview
 * @name personalCapitalWebAppApp
 * @description
 * # personalCapitalWebAppApp
 *
 * Main module of the application.
 */
angular
  .module('personalCapitalWebAppApp', [
    'ngAnimate',
    'ngAria',
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
      .otherwise({
        redirectTo: '/'
      });
  });
