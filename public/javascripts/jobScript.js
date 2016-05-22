angular.module('Jobs', []).controller('JobsController', ['$scope', '$http', function($scope, $http)
    {
        $scope.jobObj = {};
        $scope.jobObj.title = "";
        $scope.jobObj.location= "";
        $scope.jobObj.description = "";

        $scope.jobsList;
        $scope.delObject;

        $scope.updObj={};
        $scope.updObj.title = "";
        $scope.updObj.location= "";
        $scope.updObj.description = "";
        $scope.updObj.id = "0";

        $scope.updObj.show = false;

        $scope.showUpdateJob = function(jobOffer){

            $scope.updObj.show = true;
            $scope.updObj.title = jobOffer.title;
            $scope.updObj.location=jobOffer.location;
            $scope.updObj.description =jobOffer.description;
            $scope.updObj.id=jobOffer._id;
            console.log($scope.updObj);
        };

        $scope.updateJob = function(){
            $scope.updObj.show = false;

             console.log('update has successfuly loaded.');
            $http.post('/updatejob', $scope.updObj)
                .success(function(res) {
                    console.log('job updated.');
                    $scope.loadPanel();

                })
                .catch(function(err) {
                    console.log('job  error updated.');
                });
        };




        $scope.addJob = function(){
        $http.post('/postjob', $scope.jobObj)
            .success(function(res) {
                $scope.jobObj.title = "";
                $scope.jobObj.location = "";
                $scope.jobObj.description = "";
                console.log('job added successfully.');
                $scope.loadPanel();
            })
            .catch(function(err) {
                console.log('job add error.');
            });

    };

        $scope.delObj = function(jobOffer){
            $scope.delObject= jobOffer;
            console.log($scope.delObject);
            $http.post('/delJob', $scope.delObject)
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
            $http.get('/jobsOffer')
                .success(function(res){
                    $scope.jobsList = res;
                })
                .catch(function(err) {
                    console.log('Get Jobs error.');
                });
        };

        $scope.loadPanel();
    }]);