var app = angular.module('TodoApp', []);

app.controller('TodoCtrl',
    ["$scope", 'todoService',
    function($scope, todoService) {

      $scope.isHidden = false;
      $scope.buttonText = "Hide Completed";
      $scope.items = todoService.allItems();
      
      $scope.item = { text: "Get groceries from the store",
                dueDate: new Date(),
                completed: false
      };

      $scope.createTodo = function(){
        // var newObj = {};
        // newObj.text = $scope.item.text;
        // newObj.dueDate = $scope.item.dueDate;
        // newObj.completed = $scope.item.completed;
        alert("Todo has been created.");

        todoService.addItem(item);
        //$scope.items.push(newObj);
        $scope.item.text = "";
        $scope.item.dueDate = "";
        $scope.item.completed = "";
      };

      $scope.deleteTodo = function(item){
        todoService.deleteTodo(item);
        //$scope.items.splice($scope.items.indexOf(item),1);
      };

      $scope.deleteCompleted = function() {
        // $scope.items.forEach(function(item) {
            
        // });
   
        len = $scope.items.length - 1;
        for (var i = len; i >= 0; i--) {
          if ($scope.items[i].completed == true) {
             $scope.items.splice(i,1);
          }
        }
      };

      $scope.toggleButton = function() {
        // starts with isHidden is false
        // Hide Completed
        $scope.isHidden = !$scope.isHidden;
        // isHidden = true
        // In that case button text show "Show Hidden"

        if($scope.isHidden == true) {
          $scope.buttonText = "Show Completed";
        } else {
          $scope.buttonText = "Hide Completed";
        }
 
      };

}]);

app.filter('hideCompletedItem', function () {
  return function(items,scope) {
    var filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];

      if (!scope.isHidden || !item.completed ) {
        filtered.push(item);
      }
    }
    return filtered;
  };
});

app.directive('hideitems', function() {
  return {
    restrict: 'E',
    
    scope: {
      isHidden: "=",
      buttonText: "=",
      toggleButton: '&'
    },
    templateUrl: 'hideitems.html'
  };
});

app.directive('todoitem', function(){
  return{
    restrict: 'A', 

    scope: {
      todoitem: "=",
      deleteTodo: '&'
    }, 
    templateUrl:'todoitem.html'
  };
});

app.factory('todoService', function(){

  var obj = {};

  _items = [
         {
          text: "Goto school",
          dueDate: new Date(),
          completed: false 
         },
         {
          text: "Prepare lunch",
          dueDate: new Date(),
          completed: false 
         },
         {
          text: "Dentist Appointment",
          dueDate: new Date(),
          completed: false 
        },
  ];

  obj.allItems = function(){
    return _items;
  },

  obj.get = function(i){
    return _item[i];
  },

  obj.delete = function(item){
   _item.splice(indexOf(item),1);
  },

  obj.addTodo = function(item){
    _items.push(item);
  }

});

