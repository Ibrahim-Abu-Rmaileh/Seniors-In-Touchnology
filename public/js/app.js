var MYLIBRARY = MYLIBRARY || (function(){
       this.manager = false;
        
        return{
            init: function(Args){
                this.manager = Args;
            },
            isManager: function(){
                return this.manager;
            }
        };
    }());

(function(){
    var app = angular.module('SIT', []);

    app.controller('MainController', function($scope){
        
        this.signIn = function()
        {
            // google id
        };
    });
})();

