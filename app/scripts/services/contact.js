'use strict';

angular.module('worldWideApp').service('apiContact', function ($http) {
    return {
        event: function(title, data){
            $http.post('http://localhost:9000/api/contact.php',
                {
                    params:{
                    'title': title, 'data': data
                }
            })
            .then(function(response){
                console.log(response);
            });
        }
    };
});