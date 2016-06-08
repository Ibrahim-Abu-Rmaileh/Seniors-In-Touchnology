angular.module('volunteersReg', [])
    .controller('volunteersRegController', ['$scope', '$http', function($scope, $http){
        $scope.volunteersRegList;

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

                /*First, we need to get list of volunteer exhibitions that the user chose
                 * in the checkboxes*/
                var i;
                /* getting an array of checkboxes from the html*/
                var checkboxArray = $('.checkbox');
                var chosenVols = new Array(); // filling this string array with the names
                for(i=0; i<$scope.volunteersRegList.length; i++)
                {
                    if(checkboxArray[i].checked == true) // if checkbox set to true
                    {
                        chosenVols.push(checkboxArray[i].defaultValue); // save course name
                    }
                }

                if(chosenVols.length == 0)
                {
                    swal({
                        title:'בחר לפחות פעילות התנדבותית אחת',
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
                        emailjs.send("gmail","regVol",{
                            name:$("#username").val(),
                            email:$("#email").val(),
                            tel:$("#tel").val(),
                            vol:chosenVols,
                            notes:$("#notes").val()
                        }).then(
                            function(response) {
                                swal({
                                    title: "המייל נשלח בהצלחה",
                                    type:'success',
                                    timer: 2000,
                                    confirmButtonText:'אוקיי',
                                    showConfirmButton: false
                                });
                                //clear text areas
                                $("#username").val('');
                                $("#email").val('');
                                $("#tel").val('');
                                $("#notes").val('');
                                for(i=0; i<$scope.volunteersRegList.length; i++)
                                    checkboxArray[i].checked = false;
                            },
                            function(error) {
                                swal({
                                    title:'נכשל',
                                    type: 'error',
                                    confirmButtonText:'אוקיי',
                                    timer:2000,
                                    showConfirmButton: false
                                });
                            }
                        );
                    }, 2000);
                });
            }
        }

        $scope.loadvolunteersReg = function(){
            $http.get('/getvolunteers')
                .success(function(res){
                    $scope.volunteersRegList = res;
                    $("#sendEmail").click(clickListener);
                })
                .catch(function(err) {
                    console.log('Get courses error.');
                });
        };
        $scope.loadvolunteersReg();
    }]);




