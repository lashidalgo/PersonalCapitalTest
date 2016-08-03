'use strict';

/**
 * @ngdoc service
 * @name personalCapitalWebAppApp.productService
 * @description
 * # Products service, return promise.
 * Service in the personalCapitalWebAppApp.
 */
angular.module('personalCapitalWebAppApp')
  .service('ProductService', function ($http) {
  	//Here we can implement a caching system (aside from keeping the promise)
  	//something like memoization should help detecting previus similar request.
  	var promise;
    return ({
    	getProductsByQueryString : function(queryStringParam){
    		if (!promise) {
	    		var promise = $http.post('/', { queryString : queryStringParam}).then(function(response){
	    			return(response.data);
	    		});
	    	}
	    	return promise;
		}
	});
  });
