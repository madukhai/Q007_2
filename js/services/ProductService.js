app.service('productService',ProductService);

function ProductService(api){
	//services
	this.api = api;

	this.products = localStorage.getItem('products');

	// console.log(this.products);
}


ProductService.prototype.retrieveProducts = function(){
	var self = this;
	return this.api.request('/retrieve_products/team3',{},'GET');
}

ProductService.prototype.setProducts = function(products){
	//store the products in local storage so you don't have to make an API
	//request each time you are on this page.

	localStorage.setItem('products',JSON.stringify(products));
	this.products = products;

}

ProductService.prototype.getProducts = function(){
	var self = this;
	//if there are no products stored in localStorage
	//grab them from the API,store them in localStorage
	//and pass back the products as a promise
	// if(this.products == null){
		// console.log('3');
		
		return this.retrieveProducts().then(function(response){
				self.setProducts(response.data.products);
				// console.log(response.data.products);
				return response.data.products;
		   });
	// }
	// else{
	// 	var res;
	// 	if(typeof(this.products) == 'string'){
	// 		// console.log(self.products);
	// 		console.log('1');

	// 		res = JSON.parse(self.products);
	// 		console.log(res);
	// 		return res;
			
	// 	}else{
	// 		console.log('2');
	// 		return this.products;
	// 	}
		// console.log(res);
		// return this.retrieveProducts().then(function(response){
		// 		self.setProducts(response.data.products);
		// 		console.log(response.data.products);
		// 		return response.data.products;
		// 	});
			
	// }	
}
ProductService.prototype.addProduct = function(product){
 	//TODO: add the new product to the current product list and
 	//return the updated list
	return this.api.request('/newproduct',product,'POST')
			.then(function(response){

				console.log(response);
			});

}

/*
Function to edit a product. returns a POST request to api /editproduct/:productId and a promise to update products list in localStorage.
Parameters:
product: object containing key/value pairs of product properties
id: comes from product property: productId
*/
ProductService.prototype.editProduct = function(product,id){
	console.log(product);
	console.log(id);
	var self = this;
    return this.api.request('/editproduct/' + id,product,'POST')
    .then(function(response){
    	// var index;
    	// for(var i=0; i<self.products.length;i++){
    	// 	if(self.products[i].productId == id){
    	// 		index = i;
    	// 		break;
    	// 	}
    	// }
    	// self.products[index] = response.data;

    	// self.setProducts(self.products);

    	// console.log(self.products);

        console.log(response);
    });
}
