var app = angular
                .module("mymodule",[])
                .controller("tablecontroller",function($scope){
    
    var employees=[
        {name:"Tom",gender:"Male",National_ID: "131",likes:0,Dislikes:0},
        {name:"Ruby",gender:"Female",National_ID: "135",likes:0,Dislikes:0},
        {name:"Pamela",gender:"Female",National_ID: "145",likes:0,Dislikes:0},
        {name:"Sam",gender:"Male",National_ID: "152",likes:0,Dislikes:0},
        {name:"Moseph",gender:"Male",National_ID: "157",likes:0,Dislikes:0},
        
        
    ];
                     
        $scope.employees = employees;
        $scope.rowlimit =3;
        $scope.message ="Welcome to angularJS";
                    
        $scope.like = function(employees){
           employees.likes++;
        }
   
         $scope.Dislike = function(employees){
            employees.Dislikes++;
        }
   
        
    });