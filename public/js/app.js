var MYLIBRARY = MYLIBRARY || (function(){
    this.manager = false;
    return{
        init: function(Args){
            this.manager = Args;
        },
        isManager: function(){
            alert("This manager is now " + this.manager);
            return this.manager;
        }
    };
}());

(function(){
    var app = angular.module('SIT', []);

    app.controller('MainController', ['$scope', '$window', function($scope, $window) {
        
        this.signIn = function()
        {
            // google id
        };
        
        this.isManager = function(){
            alert("In the controller is " + $window.MYLIBRARY.manager);
            return $window.MYLIBRARY.manager;
        };
}])})();

