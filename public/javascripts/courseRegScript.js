angular.module('courseReg', [])
    .controller('CoureRegController', ['$scope', '$http', function($scope, $http){
        $scope.courseRegList;

        $scope.loadCourseReg = function(){
            $http.get('/course')
                .success(function(res){
                    $scope.courseRegList = res;
                })
                .catch(function(err) {
                    console.log('Get courses error.');
                });
        };
        $scope.loadCourseReg();
    }]);




