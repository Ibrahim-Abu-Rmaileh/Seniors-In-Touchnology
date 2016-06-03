angular.module('newsLetter', [])
    .controller('newsLetterController', ['$scope', '$http', '$window', function($scope, $http, $window)
    {
        $scope.access = JSON.parse(localStorage.getItem("Access"));
        console.log($scope.access);
        if(!$scope.access)
            $window.location.href = "../";

        $scope.newsLetterObj = {};
        $scope.newsLetterObj.title = "";
        $scope.newsLetterObj.description = "";

        $scope.newsLetterList;
        $scope.delObject;

        $scope.newsLetterupdObj={ };
        $scope.newsLetterupdObj.title = "";
        $scope.newsLetterupdObj.description = "";
        $scope.newsLetterupdObj.id = "0";
        $scope.newsLetterupdObj.show = false;

        $scope.showUpdateNewsLetter = function(newsL){

            $scope.newsLetterupdObj.show = true;
            $scope.newsLetterupdObj.title = newsL.title;
            $scope.newsLetterupdObj.location=newsL.location;
            $scope.newsLetterupdObj.description =newsL.description;
            $scope.newsLetterupdObj.id=newsL._id;
        };

        $scope.updateNewsLetter = function(){
            $scope.newsLetterupdObj.show = false;

            console.log('update has successfuly loaded.');
            $http.post('/updateNewsLetter', $scope.newsLetterupdObj)
                .success(function(res) {
                    console.log('newsLetter updated.');
                    $scope.loadPanel();

                })
                .catch(function(err) {
                    console.log('job  error updated.');
                });
        };




        $scope.addNewsLetter = function(){
            $http.post('/postNewsLetter', $scope.newsLetterObj)
                .success(function(res) {
                    $scope.newsLetterObj.title = "";
                    $scope.newsLetterObj.description = "";
                    console.log('newsletter added successfully.');
                    $scope.loadPanel();
                })
                .catch(function(err) {
                    console.log('newsletter add error.');
                });

        };

        $scope.delObj = function(newsL){
            $scope.delObject= newsL;
            $http.post('/delNewsLetter', $scope.delObject)
                .success(function(res) {
                    console.log('job remove.');
                    $scope.loadPanel();
                })
                .catch(function(err) {
                    console.log('job remove error.');
                });
        };

        $scope.loadPanel = function(){
            console.log('Panel has successfuly loaded.');
            $http.get('/getNewsLetter')
                .success(function(res){
                    $scope.newsLetterList = res;
                })
                .catch(function(err) {
                    console.log('Get Jobs error.');
                });
        };

        $scope.loadPanel();
    }]);