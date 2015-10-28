app.controller('ViewOrderCtrl', ViewOrderCtrl);

function ViewOrderCtrl(OrderService,$location,$routeParams,order){
    this.location = $location;
    this.orderId = $routeParams.orderId;
    this.orderService = OrderService;
    this.order = order;
    // this.getOrder();
}


ViewOrderCtrl.prototype.getOrder = function(){
	this.order = this.orderService.getOrder();
}



