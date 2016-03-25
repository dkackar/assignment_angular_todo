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

      $scope.hideCompleted = function(){
        
        $scope.hideCompletedValue = true;
      }; 

      // $scope.hideCompletedItem = function() {
      //   console.log("Truthy " + $scope.item.completed && $scope.hideCompletedValue)
      //   return $scope.item.completed && $scope.hideCompletedValue
      // };


      $scope.deleteCompleted = function() {
        $scope.items.forEach(function() {
            
        });
      };

}]);

app.filter('hideCompletedItem', function () {
  return function(items,scope) {
    var filtered = [];

    console.log("Scope is : " + scope)
    for (var i = 0; i < items.length; i++) {
      var item = items[i];

      if (!scope.hideCompletedValue || !item.completed ) {
        filtered.push(item);
      }
    }
    return filtered;

   };
});