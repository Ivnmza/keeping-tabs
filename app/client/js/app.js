var app = angular.module('TabApp', ['ngRoute']);
  app.controller('UrlsCtrl', function($scope, UrlsFactory){

  $scope.url= UrlsFactory.urls;
  $scope.user= "Current User";
  })
  .factory('UrlsFactory', function(){
    var urls = 
    [
      {
        "url":"google.com",
        "firstOpened":"04/01/16"
      },
      {
        "url":"reddit.com",
        "firstopened":"04/04/16"
      },
      {
        "url":"facebook.com",
        "firstopened":"04/02/16"
      }
    ];


    return {
      urls: urls
    }
  });

// app.config( function ($routeProvider) {
// 	'use strict';
//    // configure urls
//    $routeProvider // when home
//    .when('/',
//    	{
//     	templateUrl: '',
//       controller: 'AuthCtrl'
//     })
//    .when('/urls', // when /urls
//    	{
//    		templateUrl: '',
//       controller: 'UrlsCtrl'
//    	})
//    .otherwise({
//    			redirectTo: '/'
//    	});
// });
