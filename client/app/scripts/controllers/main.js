'use strict';

/**
 * @ngdoc function
 * @name personalCapitalWebAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personalCapitalWebAppApp
 */
angular.module('personalCapitalWebAppApp')
  .controller('MainCtrl', function ($scope, ProductService) {
    
    $scope.searchString = '';
    $scope.showFocusLayout = false;
    $scope.focusLayoutHeight = '';
    $scope.focusLayoutOffset = 0;
    $scope.searchContainer = angular.element('.searchContaine');
    $scope.searchInputField = angular.element('#finantialInstitutionSearch');
    $scope.results = [];
    $scope.showDelete = false;

    //This all search logic could be on a directive, so we can reuse the bar in other parts of the site
    //For DEV purposes I'll follo KISS pattern and leave it here.
    $scope.search = function(){
    	//Only search if the search string is greater than two
    	if ($scope.searchString.length > 2) {
    		$scope.showFocusLayoutFn(true);
    		//Query API
    		ProductService.getProductsByQueryString($scope.searchString).then(function(response){
                $scope.results = response;
            });
    	}else{
    		$scope.showFocusLayoutFn(false);
            $scope.results = [];
            $scope.showDelete = $scope.searchString.length != 0;
    	}
    };

    //This function will calculate the focus layout heigh and absolute position 
    //dinamically based on where the searchbox is
    $scope.showFocusLayoutFn = function(show){
    	$scope.focusLayoutOffset = ($scope.searchInputField.offset().top + $scope.searchInputField.innerHeight()) + 3;
    	$scope.focusLayoutHeight = (angular.element(window).innerHeight() - $scope.focusLayoutOffset) + 'px';
    	$scope.focusLayoutOffset += 'px'; 
    	$scope.showFocusLayout = show;
    };

    $scope.cleanSearchString = function(){
        $scope.searchString = '';
        $scope.showFocusLayoutFn(false);
        $scope.results = [];
        $scope.showDelete = false;
    }
  });
