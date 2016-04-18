var MANAGER = false;

var MYLIBRARY = MYLIBRARY || (function(){
    
    return{
        init: function(Args){
            MANAGER = Args;
        },
        isManager: function(){
            alert("This manager is now " + MANAGER);
            return MANAGER;
        }
    };
    
    var app = angular.module('SIT', []);

    app.controller('MainController', ['$scope', '$window', function($scope, $window) {
        
        this.signIn = function()
        {
            // google id
        };
        
        this.isManager = function(){
            alert("In the controller is " + $window.MANAGER);
            return $window.MANAGER;
        };
}]);
}());

