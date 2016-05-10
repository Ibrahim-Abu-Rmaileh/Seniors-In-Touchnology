var MANAGERS = ["afek590@gmail.com"];
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
    var MongoClient = require('mongodb').MongoClient;
    var assert = require('assert');
    var ObjectId = require('mongodb').ObjectID;
    var url = 'mongodb://sit:sit123@ds034279.mlab.com:34279/sit';
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
        var admin = {
            "email" : this.email;
        }
        
        this.addManager = function(){
            MongoClient.connect(url, function(err, db) {
               assert.equal(null, err);
                db.collection('Admins').insert(admin);
                db.close();
            });
            this.email = "";
        };
    });
})();
