'use strict';

let app = angular.module('socialLogin', ['satellizer', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    // change home template URL to jade index and controller from homeCtrl to navCtrl because
    // navbar at top of page was not loading... as of 3:50 AM not sure if that is still the case
    .state('home', { url: '/', templateUrl: '../views/index.jade', controller: 'navCtrl'})
    .state('login', { url: '/login', templateUrl: 'partials/login.html', controller: 'loginCtrl'})
    .state("newMessage", {url: "/new-message", templateUrl: "partials/newMessage.html", controller: "newMessageCtrl" })
    // need to identify which thread is being requested and render appropriate thrad
    // but first I need to check the syntax on using params... 
    .state("viewThread", {url: "/view-thread/:threadId", templateUrl: "partials/viewThread.html", controller: "addResponseCtrl"})
    .state('profile', { url: '/profile', templateUrl: 'partials/profile.html', controller: 'profileCtrl'})

    $authProvider.github({
      clientId: 'afafa88853dc368f44dd'
    });
    $authProvider.google({
      clientId: '458863588800-tm5t0hu3l19lk5kkfbop7s61tpphcdv4.apps.googleusercontent.com'
    });
    $authProvider.facebook({
      clientId: '1652079988407806'
    });

    $authProvider.twitter();

    // $authProvider.live({
    //   clientId: '000000004C173030',
    //   authorizationEndpoint: 'https://login.live.com/oauth20_desktop.srf',
    //   redirectUri: 'http://mylocalwebsite.net:3000'

    // });
});
