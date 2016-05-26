angular.module('volunteersReg', [])
    .controller('volunteersRegController', ['$scope', '$http', function($scope, $http){
        $scope.volunteersRegList;

        $scope.loadvolunteersReg = function(){
            $http.get('/getvolunteers')
                .success(function(res){
                    $scope.volunteersRegList = res;
                })
                .catch(function(err) {
                    console.log('Get courses error.');
                });
        };
        $scope.loadvolunteersReg();
    }]);




