angular.module("directivePractice").directive("lessonHider", function() {
  return {
    templateUrl: "./lessonHider.html",
    restrict: "E",
    scope: {
      lesson: "=",
      dayAlert: "&",
      removeDay: "&"
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(scope, element, attribute) {
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;

        scope.schedule.map(function(each) {
          if (each.lesson === scope.lesson) {
            scope.lessonDay = each.weekday;
            return;
            // return element.css("text-decoration", "line-through");
          }
        });
      });
    }
  };
});
