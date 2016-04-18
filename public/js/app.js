var MYLIBRARY = MYLIBRARY || (function($scope){
       $scope.manager = false;
        
        return{
            init: function(Args){
                $scope.manager = Args;
            },
            isManager: function(){
                return $scope.manager;
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
        
        this.isManager = function(){
            alert("show is " + $scope.manager;
            return $scope.manager;
        };
    });
})();

