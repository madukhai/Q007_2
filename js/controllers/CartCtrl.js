app.controller('CartCtrl',CartCtrl);

function CartCtrl($uibModal, $modalInstance){
	this.$uibModal = $uibModal;
	this.$modalInstance = $modalInstance;
}

CartCtrl.prototype.checkOut = function(){
	var self = this;
  	var options = {
	    animation:true,
	    templateUrl: 'templates/checkout.html',
	    controller: 'CheckOutCtrl as Ctrl'
  	}

  	this.$modalInstance.close();
  	this.modalInstance = this.$uibModal.open(options);
  	
}