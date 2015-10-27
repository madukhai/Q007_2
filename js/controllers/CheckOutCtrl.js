app.controller('CheckOutCtrl',CheckOutCtrl);
function CheckOutCtrl($modalInstance, order, OrderService){
	this.$modalInstance = $modalInstance;
	this.order = order;
	this.OrderService = OrderService;
}


CheckOutCtrl.prototype.confirmOrder = function(cart, total, tax, final_total) {

	// send order to server;

	var request_body = {
		cart: cart,
		total: total,
		tax: tax,
		final_total: final_total
	}

	//communicate with service
	this.OrderService.confirmOrder(request_body);

	
	this.$modalInstance.close();
};

CheckOutCtrl.prototype.close = function(){
	this.$modalInstance.close();
}