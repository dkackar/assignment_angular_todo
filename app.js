var app = angular.module('TodoApp', []);

app.controller('TodoCtrl',
    ["$scope",
    function($scope) {

      $scope.isHidden = false;
      $scope.buttonText = "Hide Completed";
      
      $scope.item = { text: "Get groceries from the store",
                dueDate: new Date(),
                completed: false };
      $scope.items = [
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

      $scope.createTodo = function(){
        var newObj = {};
        newObj.text = $scope.item.text;
        newObj.dueDate = $scope.item.dueDate;
        newObj.completed = $scope.item.completed;
        alert("Todo has been created.");
        $scope.items.push(newObj);
        $scope.item.text = "";
        $scope.item.dueDate = "";
        $scope.item.completed = "";
      };

      $scope.deleteTodo = function(item){
        $scope.items.splice($scope.items.indexOf(item),1);
      };

      // $scope.hideCompleted = function(){
        
      //   $scope.isHidden = true;
      // }; 

      // $scope.hideCompletedItem = function() {
      //   console.log("Truthy " + $scope.item.completed && $scope.isHidden)
      //   return $scope.item.completed && $scope.isHidden
      // };


      $scope.deleteCompleted = function() {
        // $scope.items.forEach(function(item) {
            
        // });
        len = $scope.items.length - 1;
        for (var i = len; i >= 0; i--) {
          if ($scope.items[i].completed == true) {
             $scope.items.splice(i,1)
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

