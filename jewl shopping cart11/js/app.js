'use strict';
var MyApp = angular.module('MyStore', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'shopping_cart/store.htm',
        controller: MyController
      }).
      when('/rings/:productSku', {
        templateUrl: 'shopping_cart/product.htm',
        controller: MyController
      }).
      when('/cart', {
        templateUrl: 'shopping_cart/shoppingCart.htm',
        controller: MyController
      }).
      otherwise({
        redirectTo: '/store'
      });
}]);


MyApp.factory("MyService", function () {

    
    var myStore = new store();

    var myCart = new shoppingCart("MyStore");

    
    
    return {
        store: myStore,
        cart: myCart
    };
});