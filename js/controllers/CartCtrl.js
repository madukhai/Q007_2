app.controller('CartCtrl',CartCtrl);

function CartCtrl($uibModal, $modalInstance,cart){
	this.$uibModal = $uibModal;
	this.$modalInstance = $modalInstance;
	this.cart = cart;
	// console.log(this.cart);
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
CartCtrl.prototype.close = function(){
	this.$modalInstance.close();
}

CartCtrl.prototype.Order = {};

CartCtrl.prototype.upgradeCart = function(){
	// add total,tax,fin
}