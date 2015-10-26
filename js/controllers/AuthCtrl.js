app.controller('AuthCtrl',AuthCtrl);

function AuthCtrl(api,$location, $modalInstance){
	this.api = api;
	this.$location = $location;
  this.$modalInstance = $modalInstance;
}
AuthCtrl.prototype.authenticate = function(username,password){
	var self = this;
	var request_body = {
		username:username,
		password:password
	};

	this.api.request('/login',request_body,'POST')
	.then(function(response) {
     
      if(response.data.authToken != 'Invalid Credentials' && response.data.authToken != null  ){
      	//reset local storage data
      	localStorage.removeItem('products');
      	localStorage.setItem('authToken',response.data.authToken);
      	self.$location.path('/admin');
      }
    },function(response){
    	console.log(response);
    	
    });;
  this.$modalInstance.close();
}

// angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

//   $scope.items = items;
//   $scope.selected = {
//     item: $scope.items[0]
//   };

//   $scope.ok = function () {
//     $uibModalInstance.close($scope.selected.item);
//   };

//   $scope.cancel = function () {
//     $uibModalInstance.dismiss('cancel');
//   };
// });