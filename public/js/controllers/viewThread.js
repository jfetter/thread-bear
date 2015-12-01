'use strict';

angular.module('socialLogin')
.controller('viewThreadCtrl', function($scope, $auth, $state, $http) {

		// not sure if I need a line like this
		//expect($stateParams).toBe({contactId: ???})

	  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err){
      console.error(err);
    });
  };

  $scope.threadUsers = ["name of me", "name of other"]

});

// need to get the thread ID -- from either profile page when
// new message is generated OR from add response page + need to
//identify who is the sender and who is the recipient
// to tack appropriate name on to this message
// the message and a put request to add this new messsage 
// to the message with this threadID
// message should be unshifted into the array of messages
// in the thread so that the newest message is at index 0 of
// the array