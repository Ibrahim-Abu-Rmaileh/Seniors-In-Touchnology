var MANAGERS = ["afek590@gmail.com", "oriamir1@gmail.com"];
var LOGIN = false;

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
    var app = angular.module('SIT', ['ngRoute']);
    
    app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
        controller: 'MainController',
        controllerAs: 'main',
        templateUrl: 'views/main.html'})
    .when('/panel',{
        controller: 'PanelController',
        controllerAs: 'panel',
        templateUrl: 'views/panel.html'});
    }]);

    app.controller('MainController', function(){
        
    });
    
    app.controller('PanelController', function(){
        if(LOGIN == false)
            window.location.href = "#/";
        this.email = "";
        
        this.addManager = function(){
            MANAGERS.push(this.email);
            this.email = "";
        };
    });
})();
