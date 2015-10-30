app.controller('CheckOutCtrl',CheckOutCtrl);
function CheckOutCtrl($modalInstance, order, OrderService,productService,$uibModal){
	this.$modalInstance = $modalInstance;
	this.order = order;
	this.OrderService = OrderService;
	this.productService	= productService;
	this.$uibModal = $uibModal;
	console.log(this.order);
}


CheckOutCtrl.prototype.confirmOrder = function() {
	console.log(this.order);
	// send order to server;
	// var self = this;
	// var request_body = {
	// 	cart: self.cart,
	// 	total: self.total,
	// 	tax: self.tax,
	// 	final_total: self.final_total
	// }

	//communicate with service
	for(var i=0; i<this.order.cart.length;i++){
		this.order.cart[i].quantity -= this.order.cart[i].amount;
		
		var request_body = this.order.cart[i];

		this.productService.editProduct(request_body, request_body.productId);
	}
	console.log(this.order);
	this.OrderService.confirmOrder(this.order);

	for(var j=0; j<this.order.cart.length;j++){
		this.order.cart[j].amount = 0;
	}

	this.$modalInstance.close();
};

CheckOutCtrl.prototype.backToCart = function(){
	var self = this;
	var options = {
    animation:true,
    templateUrl: 'templates/cart.html',
    controller: 'CartCtrl as Ctrl',
    resolve: {
      cart: function(){
         return self.order.cart;
      }
    }
  }
  this.$modalInstance.close();
  this.$modalInstance = this.$uibModal.open(options);
}

CheckOutCtrl.prototype.close = function(){
	// var self = this;
	// var options = {
 //    animation:true,
 //    templateUrl: 'templates/home.html',
 //    controller: 'CartCtrl as Ctrl',
 //    resolve: {
 //      	cart: function(){
 //         	return [];
 //      		}
 //    	}
	// }

	this.$modalInstance.close();
}