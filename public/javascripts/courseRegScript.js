angular.module('courseReg', [])
    .controller('CoureRegController', ['$scope', '$http', function($scope, $http){
        $scope.courseRegList;

        var clickListener = function(e)
        {

<<<<<<< HEAD
            if(e.target.id == "sendEmail")
            {
                emailjs.send("gmail","gmail",{name:$("#username").val(), email:$("#email").val(), tel:$("#tel").val()}).then(
                    function(response) {
                        alert("המייל נשלח בהצלחה");
                    },
                    function(error) {
                        alert("נכשל");
                    }
                );
            }
=======
           if(e.target.id == "sendEmail")
           {
               emailjs.send("gmail","gmail",{name:$("#username").val(), email:$("#email").val(), tel:$("#tel").val()}).then(
                   function(response) {
                       alert("המייל נשלח בהצלחה");
                   },
                   function(error) {
                       alert("נכשל");
                   }
               );
           }


>>>>>>> 2c9b4e00355c6e3109922ef98124d7b1b9b3f069
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