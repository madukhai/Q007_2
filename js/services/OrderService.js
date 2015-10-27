app.service('OrderService', OrderService);

function OrderService(api) {
	this.api = api;
}

OrderService.prototype.confirmOrder = function(order) {
	// Recording an order to the backend via api
	// return an order
	return this.api.request('/record_order', order, 'POST')
	.then(function(response){
		console.log(response);
	},function(response){
		console.log(response);
	});
}