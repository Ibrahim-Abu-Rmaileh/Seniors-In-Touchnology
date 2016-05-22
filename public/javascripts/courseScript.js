angular.module('Course', [])
    .controller('CourseController', ['$scope', '$http', function($scope, $http){
        $scope.courseObj = {};
        $scope.courseObj.name = "";
        $scope.courseObj.details = "";
        $scope.courseObj.id = 0;
        $scope.coursesList;
        $scope.newCourseId;

        $scope.addCourse = function(){
            $http.post('/postcourse', $scope.courseObj)
                .success(function(res) {
                    $scope.courseObj.name = "";
                    $scope.courseObj.details = "";
                    console.log('Course added successfully.');
                })
                .catch(function(err) {
                    console.log('Course add error.');
                });
            $scope.loadPanel();
        };

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
        $scope.loadPanel();
    }]);