var app = angular.module("mymodule", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "Angular_Concepts.htm",
        controller : "tablecontroller"
    })
    .when("/red", {
        templateUrl : "welcome.htm",
        controller : "tablecontroller"
    })
    .when("/green", {
        templateUrl : "index.htm"
        
    });
    
});