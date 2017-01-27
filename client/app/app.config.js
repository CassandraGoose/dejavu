(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    console.log('setting up routes');

    // this line is optional
    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        template: `
        <game-component></game-component>
        <score-component></score-component> 
        `
      });

    $urlRouterProvider.otherwise('/');
  }

}());
