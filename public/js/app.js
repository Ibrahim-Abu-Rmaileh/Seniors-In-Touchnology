/**
 * Created by DorianTs on 14/04/2016.
 */
(function(){
    var app = angular.module('SIT', []);
    
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

    app.controller('MainController', function($scope){
        
        this.signIn = function()
        {
            // google id
        };
    });
})();

