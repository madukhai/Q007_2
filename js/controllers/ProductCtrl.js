app.controller('ProductCtrl',ProductCtrl);

function ProductCtrl(productService){
	this.productService = productService;
}
ProductCtrl.prototype.addProduct = function(){
	//create the api request that makes the product on the backend
	//as part of your response you need to add it to your current
	//product array using the product service
	if(price==null){
		price = 0;
	}
	console.log(price);
	var self = this;
	var request_body = {
		name:self.name,
		description:self.description,
		price:self.price,
		category:self.category,
		quantity:self.quantity,
		status:self.status
	}

	this.productService.addProduct(request_body);
	

}