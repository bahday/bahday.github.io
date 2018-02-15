app.directive('keySubmit', function () {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {       
        elem.bind('keydown', function(event) {
          var code = event.keyCode || event.which;

          if (event.ctrlKey && code === 13) {
            if (!event.shiftKey) {
              event.preventDefault();
              scope.$apply(attrs.keySubmit);
            }
          }
        });
      }
    }
  });