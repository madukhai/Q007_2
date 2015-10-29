app.controller('CartCtrl',CartCtrl);

function CartCtrl($uibModal, $modalInstance,cart){
	this.$uibModal = $uibModal;
	this.$modalInstance = $modalInstance;
	this.cart = cart;
	// console.log(this.cart);
	this.upgradeCart();
}



CartCtrl.prototype.checkOut = function(){
	var self = this;
	var self = this;
	this.order = {
		cart: self.cart,
		total: self.total,
		tax: self.tax,
		final_total: self.final_total
	}

  	var options = {
	    animation:true,
	    templateUrl: 'templates/checkout.html',
	    controller: 'CheckOutCtrl as Ctrl',
	    resolve: {
	    	order: function(){
	    		return self.order;
	    	}
	    }
  	}

  	this.$modalInstance.close();
  	this.modalInstance = this.$uibModal.open(options);
  	
}
CartCtrl.prototype.close = function(){
	this.$modalInstance.close();
}

CartCtrl.prototype.order = {};
CartCtrl.prototype.total = 0;
CartCtrl.prototype.tax = 0;
CartCtrl.prototype.finalTotal = 0;
CartCtrl.prototype.upgradeCart = function(){
	// add total,tax,final.
	if(this.cart.length != 0){
		this.total = 0;
		for(var i=0; i < this.cart.length; i++){
			this.total += parseInt(this.cart[i].price)*this.cart[i].amount;
		}
		this.tax = this.total*0.13;
		this.final_total = this.tax + this.total;
	}
}
