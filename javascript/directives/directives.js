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
