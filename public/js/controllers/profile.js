'use strict';

angular.module('socialLogin')
.controller('profileCtrl', function($scope, $auth, $state, $http) {
  if(!$auth.isAuthenticated()){
    return $state.go('home');
  }

  $http.get('/users/me')
  .then(function(res) {
    $scope.user = res.data;
    console.log('res:', res);
  }, function(err) {
    console.error(err);
  });

  $http.get('/users/all')
  .then(function(res) {
    $scope.users = res.data;
    console.log('res:', res);
  }, function(err) {
    console.error(err);
  });

// when the user clicks on the name of another user
// they generate a new message thread that includes
// both user names + timestamp... when the backend responds
// with the newly generated message customer is sent to the new message state
// via go to state? 
  $scope.newMessage = function(){

    $scope.userx._id

  }

  $scope.addResponse = function(){
    $scope.userx._id
    // put request to backend then redirect to addResponse view

  }

});

// this controller needs to access user route on the backend with a get request. 
// on the backside the user route needs to respond with an array of all usernames
// the usernames need to be displayed in the sidebar of the profile page

//aysynchronously a request should be sent to the convo db (using a service) to get
// a list of all of the conversations that the user is involved with
// finding user convo's will require filtering through the participants field of the 
// convo db and responding with: myMessages, an array of convos in which
// the "me" user is involved
// the most recent message (which should be unshifted to the front of the array) of the convo + convo# (mongoDB #) and particiapant names
// will be displayed on an 8 or 9 col within the profile page