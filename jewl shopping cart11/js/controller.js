'use strict';

function MyController($scope, $routeParams, MyService) {

 
    $scope.store = MyService.store;
    $scope.cart = MyService.cart;

  
    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}
