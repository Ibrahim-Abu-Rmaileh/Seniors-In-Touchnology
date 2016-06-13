angular.module('Voln', [])
    .controller('VolunteersController', ['$scope', '$http', '$window', function($scope, $http, $window){
        $scope.access = JSON.parse(localStorage.getItem("Access"));
        console.log($scope.access);
        if(!$scope.access)
            $window.location.href = "../";

        $scope.volObj = {};
        $scope.volObj.title = "";
        $scope.volObj.location = "";
        $scope.volObj.description = "";

        $scope.volObj.show=false;
        $scope.volunteersList;


        $scope.volUpdObj = {};
        $scope.volUpdObj.title = "";
        $scope.volUpdObj.location = "";
        $scope.volUpdObj.description = "";
        $scope.volUpdObj.id = "0";
        $scope.volUpdObj.show= false;


        $scope.showUpdateVol= function(vol){

            $scope.volUpdObj.show = true;
            $scope.volUpdObj.title = vol.title;
            $scope.volUpdObj.location=vol.location;
            $scope.volUpdObj.description=vol.description;
            $scope.volUpdObj.id=vol._id;
        };

        $scope.updateVol = function(){
            $scope.volUpdObj.show = false;
            console.log($scope.volUpdObj);
            console.log('update has successfuly loaded.');
            $http.post('/updateVol', $scope.volUpdObj)
                .success(function(res) {
                    console.log('vol updated.');
                    $scope.loadPanel();

                })
                .catch(function(err) {

                    console.log('update vol error.');
                });
        };
        
        
        
        

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

        $scope.delVol = function(vol){
            $http.post('/delvol', vol)
                .success(function(res) {
                    console.log('Volunteer deleted successfuly.');
                    $scope.loadPanel();
                })
                .catch(function(err) {
                    console.log(err);
                });
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