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
                /*First,we need to get list of courses that the user chose
                * in the checkboxes*/
                var i;
                var checkboxArray = $('.checkbox');
                var chosenCourses = new Array(); // filling this string array with the names
                for(i=0; i<$scope.courseRegList.length; i++)
                {
                    if(checkboxArray[i].checked == true) // if checkbox set to true
                    {
                        chosenCourses.push(checkboxArray[i].defaultValue); // save course name
                    }
                }

                emailjs.send("gmail","gmail",{name:$("#username").val(),
                    email:$("#email").val(), tel:$("#tel").val(),
                    course:chosenCourses, notes:$("#notes").val()}).then(
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
                    console.log($scope.courseRegList);
                })
                .catch(function(err) {
                    console.log('Get courses error.');
                });
        };
        $scope.loadCourseReg();
    }]);