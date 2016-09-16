'use strict';

/**
 * @ngdoc function
 * @name worldWideApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the worldWideApp
 */
angular.module('worldWideApp').controller('ContactCtrl', function ($scope, apiContact) 
{
    $scope.info = {
        name: 'Yamil Padron',
        email: 'yamilpadron@gmail.com',
        company: 'mycompany',
        phone: 78555444,
        website: 'www.mycompany.com',
        memo: 'hello World'
    };
    
    $scope.Works = function()
    {
        var message = '<h3>'+ $scope.info.name +'</h3>';
        message    += '<h4>'+ $scope.info.company +'</h4>';
        message    += '<h5>'+ $scope.info.website +'</h5>';
        message    += '<h6>'+ $scope.info.memo +'</h6>';
        apiContact.event('From Contact Us', message);
    };
    
});
