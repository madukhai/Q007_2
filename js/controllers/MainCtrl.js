app.controller('MainCtrl',MainCtrl);

function MainCtrl(productService, $uibModal,$scope){
	back_setting();
	this.productService = productService;
	this.$uibModal = $uibModal;
	this.$scope = $scope;
	this.getProducts();
	console.log(this.products);
}

MainCtrl.prototype.getProducts = function(){
	this.products = this.productService.getProducts();

}


MainCtrl.prototype.getVideoHeight = function (){
	var video = angular.element('body').context.children[0].children[1].children[0].children[2];
	return angular.element(video)[0].clientHeight;
}

MainCtrl.prototype.open = function(){
	var self = this;
  var options =  {
    animation: true,
    templateUrl: 'templates/login.html',
    controller: 'AuthCtrl as Ctrl',
     // resolve: {
    //   items: function () {
    //     return $scope.items;
    //   }
    // }
    scope: this.$scope.$new()
  }
  this.modalInstance = this.$uibModal.open(options);

  console.log(this.modalInstance);
  this.modalInstance.result.then(function () {
    console.log(modalInstance);
  }, function () {
    $log.info('Modal dismissed at: ' + new Date());
  });
}






function back_setting(){
  var pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight,
    cell_size: 250,
    variance: 1,
    stroke_width: 2,

    // color_function : function(x, y) {
    //     return "#1b1b1b";
    //   }
  }).svg(); // Render as SVG.
  
  // Add pattern to DOM.
  var svg = angular.element(pattern);

  var container = angular.element('body').context.children[0].children[1].children[0].children[0];

 



  
  angular.element(container).append(svg);
}


	
// angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

//   $scope.items = ['item1', 'item2', 'item3'];

//   $scope.animationsEnabled = true;

//   $scope.open = function (size) {

//     var modalInstance = $uibModal.open({
//       animation: $scope.animationsEnabled,
//       templateUrl: 'myModalContent.html',
//       controller: 'ModalInstanceCtrl',
//       size: size,
//       resolve: {
//         items: function () {
//           return $scope.items;
//         }
//       }
//     });

//     modalInstance.result.then(function (selectedItem) {
//       $scope.selected = selectedItem;
//     }, function () {
//       $log.info('Modal dismissed at: ' + new Date());
//     });
//   };

//   $scope.toggleAnimation = function () {
//     $scope.animationsEnabled = !$scope.animationsEnabled;
//   };

// });









// var gun1 = {
// 	name:'Russian SKS Semi-Auto Rifle w/ Laminate Stock',
// 	description:'• Top-quality Russian-manufactured SKS rifles\n Durable laminated wood stock\n Original factory blueing\nThese are some of the best looking SKS rifles we have come across in a long time. Don’t be misled by other SKS rifles on the market, these rifles are individually hand-picked and represent the best, top-quality SKS rifles manufactured in Russia. These premium rifles feature original factory blueing, durable laminated wood stock, 5-shot top-feed magazine with hinged floor plate and a 20” barrel with folding bayonet. Includes cleaning kit, oil bottle and sling.\nCaliber: 7.62x39mm.\nWARNING: Cleaning and removal of oil from all parts will be required to ensure safe and reliable operation.\nNOTE: Due to the varying condition of SKS surplus rifles condition, colouring and finish of the stock will vary.',
// 	price:229.99,
// 	category:['Rifle','Firearms'],
// 	quantity:50,
// 	status:'active'
// 	}

// var gun2 = {
// 	name:'Sig Sauer 1911- 45 ACP Desert',
// 	description: 'The legendary 1911 design has been brought into the 21st century with the refinement today’s shooters demand.',
// 	price:949.95,
// 	category:['Handgun','Firearms'],
// 	quantity:50,
// 	status:'active'
// }

// var gun3 = {
// 	name:'Remington - 870 Express 20Ga ($384.95 After Mail in Rebate)',
// 	description:'The Remington 870 Express synthetic pump shotguns have non-binding twin action bars for smooth, easy operation. Strong lock-up of breech bolt lug in to a massive barrel extension. Features a non-reflective matte black synthetic stock',
// 	price:409.99,
// 	category:['Shotgun','Firearms'],
// 	quantity:50,
// 	status:'active'
// }
// var gun4 = {
// 	name:'MagPul - PMAG 5/20 AR/M4 GEN M3, 5.56x45 Magazine',
// 	description:'Rifle Magazine, 5.56x45 NATO/.223 Remington 5/20 Round Capacity, Impact/Dust Cover Slimline Floorplate, Marking Matrix Over-Travel Insertion Stop',
// 	price:19.95,
// 	category:['Magazine','Accessory'],
// 	quantity:200,
// 	status:'active'
// }
// var gun5 = {
// 	name:'Federal AE 50 BMG 660 gr 100 Rounds (10 boxes)',
// 	description:'50 BMG',
// 	price:479.99,
// 	category:['Bullet','Amution'],
// 	quantity:500,
// 	status:'active'
// }


// MainCtrl.prototype.products = [gun1,gun2,gun3,gun4,gun5];

















