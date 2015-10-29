app.controller('ViewOrderCtrl', ViewOrderCtrl);

function ViewOrderCtrl(OrderService,$location,$routeParams,orders){
    this.location = $location;
    this.orderId = $routeParams.orderId;
    this.orderService = OrderService;
    this.orders = orders;
    
}


ViewOrderCtrl.prototype.getOrder = function(){
	this.orders = this.orderService.getOrders();
}



