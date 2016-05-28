angular.module('courseReg', [])
    .controller('CoureRegController', ['$scope', '$http', function($scope, $http){
        $scope.courseRegList;

        var clickListener = function(e)
        {

           if(e.target.id == "sendEmail")
           {
               emailjs.send("gmail","gmail",{name:$("#username").html(), email:$("#email").html(), tel:$("#tel").html()}).then(
                   function(response) {
                       alert("success");
                   },
                   function(error) {
                       alert("failed");
                   }
               );
           }


        }

        $scope.loadCourseReg = function()
        {
            $http.get('/course')
                .success(function(res){
                    $scope.courseRegList = res;
                    $("#sendEmail").click(clickListener);
                })
                .catch(function(err) {
                    console.log('Get courses error.');
                });
        };
        $scope.loadCourseReg();
    }]);




