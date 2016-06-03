angular.module('Panel', [])
.controller('PanelController', ['$scope', '$http', function($scope, $http){
    $scope.adminObj = {};
    $scope.adminObj.name = "";
    $scope.adminObj.email = "";

    $scope.adminsList;

    $scope.loadPanel = function(){
        $http.get('/admins')
            .success(function(res){
                $scope.adminsList = res;
                console.log('Panel has successfuly loaded.');
                $scope.$apply;
            })
            .catch(function(err) {
                console.log('Get admins error.');
            });
    };

    $scope.addAdmin = function(){
        $http.post('/postadmin', $scope.adminObj)
            .success(function(res) {
                $scope.adminObj.name = "";
                $scope.adminObj.email = "";
                console.log('Admin added successfully.');
                $scope.loadPanel();
            })
            .catch(function(err) {
                console.log('Admin add error.');
            });
    };

    $scope.delAdmin = function(admin){
        console.log('I am at method delAdmin');
        $http.post('/deladmin', admin)
            .success(function(res) {
                console.log('Admin deleted successfuly.');
                $scope.loadPanel();
            })
            .catch(function(err) {
                console.log('Admin delete error.');
            });
    };

    $scope.loadPanel();
}]);