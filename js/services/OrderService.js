app.service('OrderService', OrderService);

function OrderService(api) {
	this.api = api;
	this.order = localStorage.getItem('order');
}

OrderService.prototype.confirmOrder = function(order) {
	// Recording an order to the backend via api
	// return an order
	return this.api.request('/record_order', order, 'POST')
	.then(function(response){
		// console.log(response);
	},function(response){
		// console.log(response);
	});
}

ProductService.prototype.setOrder = function(order){
	//store the products in local storage so you don't have to make an API
	//request each time you are on this page.
	localStorage.setItem('order',JSON.stringify(order));
	this.order = order;
}

OrderService.prototype.retrieveOrder = function(){
	var self = this;
	return this.api.request('/retrieve_orders/team3', {}, 'GET');
}

OrderService.prototype.getOrder = function(){
	var self = this;
	//if there are no products stored in localStorage
	//grab them from the API,store them in localStorage
	//and pass back the products as a promise
	if(this.order == null){
		return this.retrieveOrder().then(function(response){
				self.setOrder(response.data.order);
				console.log(response.data.order);
				return response.data.order;
		   });
	}
	else{
		return JSON.parse(self.order);
	}
}