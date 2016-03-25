app.controller('TodoCtrl',
    ["$scope", "todoService", function($scope,todoService) {

      $scope.isHidden = false;
      $scope.sortby = "";

      $scope.buttonText = "Hide Completed";
      $scope.items = todoService.allItems();
      
      $scope.item = { text: "Get groceries from the store",
                dueDate: new Date(),
                completed: false
      };

      $scope.createTodo = function(){
        var newObj = {};
        newObj.text = $scope.item.text;
        newObj.dueDate = $scope.item.dueDate;
        newObj.completed = $scope.item.completed;

        alert("Todo has been created.");

        todoService.addTodo(newObj);
       
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

