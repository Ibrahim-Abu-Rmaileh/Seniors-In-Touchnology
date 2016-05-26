angular.module('jobOffers', [])
    .controller('jobOffersController', ['$scope', '$http', function($scope, $http){
        $scope.jobOfferList;

        $scope.loadCourseReg = function(){
            $http.get('/jobsOffer')
                .success(function(res){
                    $scope.jobOfferList = res;
                })
                .catch(function(err) {
                    console.log('Get courses error.');
                });
        };
        $scope.loadCourseReg();
    }]);




