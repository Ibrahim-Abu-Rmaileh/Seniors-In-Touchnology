angular.module('courseReg', [])
    .controller('CoureRegController', ['$scope', '$http', function($scope, $http){
        $scope.courseRegList;

        /*Listener to button clicks*/
        var clickListener = function(e)
        {
            /*If send email button was clicked, use the API of emailJS to send
            * email to a specific email we configured before.
            * email sended to - sitjce@gmail.com*/

            /*
            * TO_DO :
            * 1)send also the wanted courses as part of the email
            * 2)clone all this logic to the volunteer page*/
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