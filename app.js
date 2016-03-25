var app = angular.module('TodoApp', []);

app.controller('TodoCtrl',
    ["$scope",
    function($scope) {
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
          completed: true 
         },
         {
          text: "Dentist Appointment",
          dueDate: new Date(),
          completed: false 
        },
      ];
}]);