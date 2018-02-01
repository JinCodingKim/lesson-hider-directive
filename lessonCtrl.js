angular.module("directivePractice").controller("lessonCtrl", function($scope) {
  $scope.lessons = [
    "Services",
    "Routing",
    "Directives",
    "Review",
    "Firebase",
    "No server project",
    "Node",
    "Express",
    "Mongo"
  ];
  $scope.checkBox = false;
  $scope.removeThis = lesson => {
    let lessonIndex = $scope.lessons.findIndex(element => element === lesson);
    $scope.lessons.splice(lessonIndex, 1);
  };
  $scope.announceDay = (lesson, day) => {
    if (!day) {
      return alert(lesson + " is not active.");
    } else {
      return alert(lesson + " is active on " + day + ".");
    }
  };
});
