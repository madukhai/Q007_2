app.controller('ViewOrderCtrl', ViewOrderCtrl);

function ViewOrderCtrl(OrderService,$location,$routeParams){
    this.location = $location;
    this.orderId = $routeParams.orderId;
    this.orderService = OrderService;
    // this.getOrder();
}


ViewOrderCtrl.prototype.getOrder = function(){
	this.order = this.orderService.getOrder();
}



