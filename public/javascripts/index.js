var MANAGERS = [];
var LOGIN = false;

angular.module('Index', [])
    .controller('IndexController', ['$scope', '$http', function($scope, $http){


        $scope.loadPanel = function(){
            $http.get('/admins')
                .success(function(res){
                    response = res;
                    for(var i=0; i<response.length; i++)
                        MANAGERS.push(response[i].email);
                    if(LOGIN == false)
                        window.location.href = "#/";
                    console.log('Panel has successfuly loaded.');
                })
                .catch(function(err) {
                    console.log('Get admins error.');
                });
        };

        $scope.loadPanel();
    }]);