'use strict';

/**
 * @ngdoc function
 * @name personalCapitalWebAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personalCapitalWebAppApp
 */
angular.module('personalCapitalWebAppApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.searchString = '';
    $scope.showFocusLayout = false;
    $scope.focusLayoutHeight = '';
    $scope.focusLayoutOffset = 0;
    $scope.searchContainer = angular.element('.searchContaine');
    $scope.searchInputField = angular.element('#finantialInstitutionSearch');
    $scope.results = [
        {
            'name': 'American Express Cards (US)',
            'url': 'https://www.americanexpress.com',
            'type': 'CREDIT_CARD'
        },
        {
            'name': 'Ariel Mutual Funds (US)',
            'url': 'http://www.arielmutualfunds.com/home.index.htm',
            'type': 'INVESTMENT'
        },
        {
            'name': 'American Funds (US) - Investments',
            'url': 'https://www.americanfunds.com',
            'type': 'INVESTMENT'
        },
        {
            'name': 'Alliance Bernstein (US) - Investments',
            'url': 'http://www.alliancebernstein.com/investments/us/Home.aspx?nid=5415',
            'type': 'INVESTMENT'
        }];
    $scope.search = function(){
    	//Only search if the search string is greater than two
    	if ($scope.searchString.length > 2) {
    		$scope.showFocusLayoutFn(true);
    		//Query API
    		

    	}else{
    		$scope.showFocusLayoutFn(false);
    	}

    };

    $scope.showFocusLayoutFn = function(show){
    	$scope.focusLayoutOffset = ($scope.searchInputField.offset().top + $scope.searchInputField.innerHeight()) + 3;
    	$scope.focusLayoutHeight = (angular.element(window).innerHeight() - $scope.focusLayoutOffset) + 'px';
    	$scope.focusLayoutOffset += 'px'; 
    	$scope.showFocusLayout = show;
    	/*if (show) {
    		window.innerHeight;
    	}*/
    };
  });
