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
	this.OrderService.confirmOrder(this.order);

	
	this.$modalInstance.close();
};

CheckOutCtrl.prototype.close = function(){
	this.$modalInstance.close();
}