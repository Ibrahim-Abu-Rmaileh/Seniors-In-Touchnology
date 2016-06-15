angular.module('nlMain', [])
    .controller('nlMainController', ['$scope', '$http', function($scope, $http){
        $scope.newsLetterList;


        $scope.loadPanel = function(){
            console.log('Panel has successfuly loaded.');
            $http.get('/getNewsLetter')
                .success(function(res){
                    $scope.newsLetterList = res;
                })
                .catch(function(err) {
                    console.log('Get newsLetter error.');
                });
        };

        $scope.showNewsLetter = function(nl) {
            if (!nl.show)
                nl.show = true;
            else
                nl.show = false;
        }

        $scope.loadPanel();

    }]);








