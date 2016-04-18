var MANAGER;

/*var MYLIBRARY = MYLIBRARY || (function(){
    
    return{
        init: function(Args){
            MANAGER = Args;
        },
        isManager: function(){
            alert("This manager is now " + MANAGER);
            return MANAGER;
        }
    };
}());*/

(function(){
    var app = angular.module('SIT', []);

    app.controller('MainController', ['$scope', '$window', function($scope, $window) {
        MANAGAR = false;
        this.signIn = function()
        {
            // google id
        };
        
        this.isScreen = function(num){
            return MANAGAR == num;
        };
        
        this.setScreen = function(num){
            MANAGAR = num;
        };
}])})();
