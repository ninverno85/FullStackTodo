
(function() {
  'use strict';

//The Controller
  angular
    .module('app')
    .controller('TodoListController', TodoListController);

  TodoListController.$inject = ['VstdaFactory'];

  /* @ngInject */
  function TodoListController(VstdaFactory) {
    var vm = this;
    vm.list = [];
    vm.toDoObject = {};
//Defining the date and time variable 
    var date = new Date();
//.toLocaleString() adds the current date and time
    var todaysDateTime = date.toLocaleString();
    vm.CreationDate = todaysDateTime;

//the click function to enable adding the new "to-do" input items and turning them into an array
    vm.submit = function(toDoObject)
     {
//Adding the date and time to the "to-do" item 
       toDoObject.CreationDate = todaysDateTime;
//Checking the factory to see if the item is passed successfully
       VstdaFactory.getTodo(toDoObject)
          .then(function(response)
          {
            console.log(response);
            pushTodoItem(response.data);
          }, function(error)
          {
//Logging an error if the item does not pass to the database
            console.log(error);
          })
     }
//This function pushes what the user writes into a list array to sort via priority level
      function pushTodoItem(todo){
                  vm.list.push({
            todo: vm.toDoObject.TodoInput,
        priority: vm.toDoObject.PriorityLevel
      })
      };
    }
})();
