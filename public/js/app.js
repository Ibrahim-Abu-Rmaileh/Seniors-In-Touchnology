var MYLIBRARY = MYLIBRARY || (function(){
       var manager = false;
        
        return{
            init: function(Args){
                manager = Args;
            },
            isManager: function(){
                return manager;
            }
        };
    });

(function(){
    var app = angular.module('SIT', []);

    app.controller('MainController', function($scope){
        
        this.signIn = function()
        {
            // google id
        };
    });
})();

