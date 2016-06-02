var MANAGERS = [];
var LOGIN = false;

var app = angular.module('Index', []).controller('IndexController', ['$scope', '$http', function($scope, $http){
    $scope.loadPanel = function(){
        //LOGIN = false;
        $http.get('/admins')
            .success(function(res){
                response = res;
                for(var i=0; i<response.length; i++)
                    MANAGERS.push(response[i].email);
                console.log('Panel has successfuly loaded.');
            })
            .catch(function(err) {
                console.log('Get admins error.');
            });
    };

    $scope.isAdmin = function(){
        return LOGIN;
    };

    $scope.loadPanel();
}]);