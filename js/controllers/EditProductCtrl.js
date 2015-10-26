app.controller('EditProductCtrl',EditProductCtrl);

//could you reuse productCtrl to control edit_product.html?

function EditProductCtrl(productService,products,$location,$routeParams){
    this.location = $location;
    this.productId = $routeParams.productId;
    // this.name = this.product.name;

    
    //services
    this.productService = productService;
    this.products = products;
    console.log(this.products);
    console.log(this.productId);
    this.product = this.getProduct(this.productId)

}

EditProductCtrl.prototype.getProduct = function(id) {
    console.log('getProduct');
  return this.products.filter(function(product) {
    return product.productId === id})[0];
  //loops through the entire localStorage.products array. It then puts all the objects into a new array that fit the requirements that equal the 'id'. This will only ever return one object. the [0] sercurity buffer. If more than one product has the same id, it will only put the first product with the id into the array.
}

EditProductCtrl.prototype.editProduct = function(){
    //var self = this;
    

    var request_body = {
        name:this.product.name,
        description:this.product.description,
        price:this.product.price,
        category:this.product.category,
        quantity:this.product.quantity,
        status:this.product.status
    }
    
    console.log(request_body);
    console.log(this.productId);
    this.productService.editProduct(request_body, this.productId);
}

