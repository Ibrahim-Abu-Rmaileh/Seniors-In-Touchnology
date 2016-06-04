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
                    alert('Please insert your name');
                    return;
                }
                if($('#email').val() == '')
                {
                    alert('Please insert your email');
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
                    alert('Please choose at least one volunteer exhibition');
                    return;
                }
                if(!confirm("Are you sure you want to send this email to the organization?" +
                    " Before clicking ok, please check that all fields are correct"))
                    return;

                emailjs.send("gmail","regVol",{
                    name:$("#username").val(),
                    email:$("#email").val(),
                    tel:$("#tel").val(),
                    vol:chosenVols,
                    notes:$("#notes").val()
                }).then(
                    function(response) {
                        alert("המייל נשלח בהצלחה");
                        //clear text areas
                        $("#username").val('');
                        $("#email").val('');
                        $("#tel").val('');
                        $("#notes").val('');
                        for(i=0; i<$scope.volunteersRegList.length; i++)
                            checkboxArray[i].checked = false;
                    },
                    function(error) {
                        alert("נכשל");
                    }
                );
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




