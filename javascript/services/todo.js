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

  // obj.filters = [{name: 'None', value: ''},
  //             {name: 'Completed on Top', value: "-completed"},
  //             {name: 'Completed on Bottom', value: "completed"},
  //             {name: 'Due Date Ascending', value: 'dueDate'},
  //             {name: 'Due Date Descending', value: '-dueDate'}
  //             ];
  
  // obj.getFilters = function(){
  //   return obj.filters;
  // };

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
