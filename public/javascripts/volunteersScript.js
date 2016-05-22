angular.module('Voln', [])
    .controller('VolunteersController', ['$scope', '$http', function($scope, $http){
        $scope.volObj = {};
        $scope.volObj.title = "";
        $scope.volObj.location = "";
        $scope.volObj.description = "";
        $scope.volunteersList;

        $scope.addVol = function(){
            $http.post('/postvolunteers', $scope.volObj)
                .success(function(res) {
                    $scope.volObj.title = "";
                    $scope.volObj.location = "";
                    $scope.volObj.description = "";
                    console.log('Volunteer added successfully.');
                })
                .catch(function(err) {
                    console.log('Volunteer add error.');
                });
            $scope.loadPanel();
        };

        $scope.loadPanel = function(){
            console.log('Panel has successfuly loaded.');
            $http.get('/getvolunteers')
                .success(function(res){
                    $scope.volunteersList = res;
                })
                .catch(function(err) {
                    console.log('Get volunteer error.');
                });
        };
        $scope.loadPanel();
    }]);