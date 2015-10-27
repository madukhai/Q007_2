app.controller('CheckOutCtrl',CheckOutCtrl);
function CheckOutCtrl($modalInstance, order){
	this.$modalInstance = $modalInstance;
	this.order = order;
}


CheckOutCtrl.prototype.confirm = function() {

	// send order to server;






	
	this.$modalInstance.close();
};

CheckOutCtrl.prototype.close = function(){
	this.$modalInstance.close();
}