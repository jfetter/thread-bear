'use strict';

angular.module('socialLogin')
.controller('homeCtrl', function($scope, $auth) {
	   $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err){
      console.error(err);
    });
  };

});
