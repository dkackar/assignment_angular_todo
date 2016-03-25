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
