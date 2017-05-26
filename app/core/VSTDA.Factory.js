(function () {
    'use strict';

    angular
        .module('app')
        .factory('VstdaFactory', VstdaFactory)

    VstdaFactory.$inject = ['$http'];

    function VstdaFactory($http) {
        var service =
         {
            getTodo: getTodo
        
         };

        return service;

//This grabs the api we made from our backend 
        function getTodo(object) {
            return $http({
//Using the POST method to create the "to-do" object input for our SQL database
                method: 'POST',
                url: 'http://localhost:51202/api/Todo',
                data: object,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
//To show if the submission of the to-do item was successfully passed into our database
            }) .then(function successfulSubmit(response)
             {
                return response;
            }, 
//To show if we were unsuccessful in passing our to-do item to our database
            function errorReturn(error)
             {
                return error;
              }); 
    
        }
    }
})();

