'use strict';

/**
 * @ngdoc function
 * @name worldWideApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the worldWideApp
 */
angular.module('worldWideApp').controller('MenuCtrl', function ($scope) 
{
    $scope.menuItem = 'Home';
    $scope.MenuClicked = function(menu)
    {
        $scope.menuItem = menu;
    };
});
