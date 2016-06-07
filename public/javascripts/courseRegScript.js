angular.module('courseReg', [])
    .controller('CoureRegController', ['$scope', '$http', function($scope, $http){
        $scope.courseRegList;

        /*Listener to button clicks*/
        var clickListener = function(e)
        {
            /*If send email button was clicked, use the API of emailJS to send
            * email to a specific email we configured before.
            * email sended to - sitjce@gmail.com*/

            if(e.target.id == "sendEmail")
            {
                if($('#username').val() == '')
                {
                    sweetAlert('Hello');
                    return;
                }
                if($('#email').val() == '')
                {
                    alert('Please insert your email');
                    return;
                }

                /*First, we need to get list of courses that the user chose
                * in the checkboxes*/
                var i;
                /* getting an array of checkboxes from the html*/
                var checkboxArray = $('.checkbox');
                var chosenCourses = new Array(); // filling this string array with the names
                for(i=0; i<$scope.courseRegList.length; i++)
                {

                    if(checkboxArray[i].checked == true) // if checkbox set to true
                    {
                        chosenCourses.push(checkboxArray[i].defaultValue); // save course name
                    }
                }

                if(chosenCourses.length == 0)
                {
                    alert('Please choose at least one course');
                    return;
                }

                if(!confirm("Are you sure you want to send this email to the organization?" +
                        " Before clicking ok, please check that all fields are correct"))
                    return;

                emailjs.send("gmail","regCourse",{
                    name:$("#username").val(),
                    email:$("#email").val(),
                    tel:$("#tel").val(),
                    course:chosenCourses,
                    notes:$("#notes").val()
                }).then(
                    function(response) {
                        alert("המייל נשלח בהצלחה");
                        //clear text areas
                        $("#username").val('');
                        $("#email").val('');
                        $("#tel").val('');
                        $("#notes").val('');
                        for(i=0; i<$scope.courseRegList.length; i++)
                            checkboxArray[i].checked = false;
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