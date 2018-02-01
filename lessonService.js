angular.module("directivePractice").service("lessonService", function($http) {
  this.getSchedule = () => {
    return $http.get("schedule.json");
  };
});
