angular.module('Course', [])
    .controller('CourseController', ['$scope', '$http', '$window', function($scope, $http, $window){
        $scope.access = JSON.parse(localStorage.getItem("Access"));
        console.log($scope.access);
        if(!$scope.access)
            $window.location.href = "../";

        $scope.courseObj = {};
        $scope.courseObj.name = "";
        $scope.courseObj.details = "";
        $scope.courseObj.id = 0;
        $scope.coursesList;
        $scope.newCourseId;



        $scope.loadPanel = function(){
            console.log('Panel has successfuly loaded.');
            $http.get('/course')
                .success(function(res){
                    $scope.coursesList = res;
                })
                .catch(function(err) {
                    console.log('Get courses error.');
                });
        };

        $scope.delCourse = function(course){
            $http.post('/delcourse', course)
                .success(function(res) {
                    console.log('Course deleted successfuly.');
                    $scope.loadPanel();
                })
                .catch(function(err) {
                    console.log(err);
                });
        };

        $scope.addCourse = function(){
            $http.post('/postcourse', $scope.courseObj)
                .success(function(res) {
                    $scope.courseObj.name = "";
                    $scope.courseObj.details = "";
                    console.log('Course added successfully.');
                    $scope.loadPanel();
                })
                .catch(function(err) {
                    console.log('Course add error.');
                });
        };

        $scope.loadPanel();
    }]);