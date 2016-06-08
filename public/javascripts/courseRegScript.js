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
                    swal({
                        title:'הכנס את שמך בבקשה',
                        type: 'error',
                        confirmButtonText:'אוקיי'
                    });
                    return;
                }
                if($('#email').val() == '')
                {
                    swal({
                        title:'הכנס אימייל בבקשה',
                        type: 'error',
                        confirmButtonText:'אוקיי'
                    });
                    return;
                }
                var emailRegularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var validEmail = (emailRegularExpression.test($('#email').val()));
                if(!validEmail)
                {
                    swal({
                        title:'הכנס אימייל תקין בבקשה',
                        type: 'error',
                        confirmButtonText:'אוקיי'
                    });
                    return;
                }
                /*First, we need to get list of courses that the user chose
                * in the checkboxes*/
                var i;
                /* getting an array of checkboxes from the html*/
                var checkboxArray = $('.checkbox');
                var chosenCourses = []; // filling this string array with the names
                for(i=0; i<$scope.courseRegList.length; i++)
                {
                    if(checkboxArray[i].checked == true) // if checkbox set to true
                    {
                        chosenCourses.push(checkboxArray[i].defaultValue); // save course name
                    }
                }

                if(chosenCourses.length == 0)
                {
                    swal({
                        title:'בחר לפחות קורס אחד',
                        type: 'error',
                        confirmButtonText:'אוקיי'
                    });
                    return;
                }
               swal({
                    title: 'האם אתה בטוח?',
                    text: 'לפני לחיצת כן, אנא בדוק שמילאת נכון את כל השדות',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: 'green',
                    confirmButtonText: 'כן',
                    cancelButtonText:'בטל',
                    allowOutsideClick: false,
                    closeOnConfirm: false,
                   showLoaderOnConfirm: true
                },function(){
                   /*if user clicked 'Yes' then send email*/
                   setTimeout(function(){
                       emailjs.send("gmail","regCourse",{
                        name:$("#username").val(),
                        email:$("#email").val(),
                        tel:$("#tel").val(),
                        course:chosenCourses,
                        notes:$("#notes").val()
                        }).then(
                        function(response) {
                        swal({
                        title: "המייל נשלח בהצלחה",
                        type:'success',
                        timer: 2000,
                        showConfirmButton: false,
                            confirmButtonText:'אוקיי'
                        });
                        //clear text areas
                        $("#username").val('');
                        $("#email").val('');
                        $("#tel").val('');
                        $("#notes").val('');
                        for(i=0; i<$scope.courseRegList.length; i++)
                        checkboxArray[i].checked = false;
                        },
                        function(error) {
                        swal({
                            title:'נכשל',
                            type: 'error',
                            timer:2000,
                            showConfirmButton: false,
                            confirmButtonText:'אוקיי'
                        });
                        }
                        );
                   }, 2000);
                });
            }
        };

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



/*
 swal({
 title: 'שולח...',
 text:'',
 type:'info',
 showCancelButton: false
 });
* */