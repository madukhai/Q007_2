app.controller('CheckOutCtrl',CheckOutCtrl);
function CheckOutCtrl($modalInstance, order, OrderService){
	this.$modalInstance = $modalInstance;
	this.order = order;
	this.OrderService = OrderService;
}


CheckOutCtrl.prototype.confirmOrder = function() {

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
		this.order.cart[i].amount = 0;
	}
	this.OrderService.confirmOrder(this.order);

	
	this.$modalInstance.close();
};

CheckOutCtrl.prototype.close = function(){
	this.$modalInstance.close();
}