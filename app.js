var app = angular.module('TodoApp', []);

app.controller('TodoCtrl',
    ["$scope",
    function($scope) {

      $scope.hideCompletedValue = false;
      
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
        
      //   $scope.hideCompletedValue = true;
      // }; 

      // $scope.hideCompletedItem = function() {
      //   console.log("Truthy " + $scope.item.completed && $scope.hideCompletedValue)
      //   return $scope.item.completed && $scope.hideCompletedValue
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

}]);

app.filter('hideCompletedItem', function () {
  return function(items,scope) {
    var filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];

      if (!scope.hideCompletedValue || !item.completed ) {
        filtered.push(item);
      }
    }

    return filtered;
  };
});

app.directive('hideitems', function() {

  return {
    restrict: 'E',
    
    scope: {},
    
    templateUrl: 'hideitems.html',

    link: function(scope, element, attrs) {
      
      scope.buttonText = "Hide Completed",
      scope.hideCompletedValue = false,
      
      scope.toggleButton = function() {
        if(scope.hideCompletedValue == true) {
          scope.buttonText = "Show Completed";
          scope.hideCompletedValue = false;
        } else {
          scope.buttonText = "Hide Completed";
          scope.hideCompletedValue = true;
        }
        //console.log("After " + scope.hideCompletedValue);
      };
    },
  };

});