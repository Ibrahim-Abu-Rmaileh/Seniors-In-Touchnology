var MYLIBRARY = MYLIBRARY || (function(){
    this.manager = false;
    return{
        init: function(Args){
            this.manager = Args;
            alert("This manager is now " + this.manager);
        },
        isManager: function(){
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
            return $window.MYLIBRARY.isManager();
        };
}])})();

