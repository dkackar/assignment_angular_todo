app.factory('todoService', [function(){

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
  };

  obj.get = function(i){
    return _items[i];
  };

  obj.deleteTodo = function(item){
   _items.splice(_items.indexOf(item),1);
  };

  obj.addTodo = function(item){
    _items.push(item);
  };

  return obj; 
}]);
