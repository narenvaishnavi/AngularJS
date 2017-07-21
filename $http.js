var app = angular.module('mymodule', []);
app.controller('tablecontroller', function($scope, $http,$log) {
          $http({
            method : "GET",
            url : "http://www.tutorialspoint.com/json/data.json"
          }).then(function sucessHandler(response) {
              $scope.myWelcome = response.data;
            }, function errorHandler(response) {
              $scope.myWelcome = response.statusText;
          });

         // second Ajax call for unordered List
             $http({
            method : "GET",
            url : "https://www.w3schools.com/angular/customers.php"
          }).then(function sucessHandler(response) {
              $scope.info = response.data.records;
              $log.info(response);
            }, function errorHandler(response) {
              $scope.myWelcome = response.statusText;
          });

      var employees=[
        {name:"Tom",gender:"1",National_ID: "131",likes:0,Dislikes:0},
        {name:"Ruby",gender:"2",National_ID: "135",likes:0,Dislikes:0},
        {name:"Pamela",gender:"1",National_ID: "145",likes:0,Dislikes:0},
        {name:"Sam",gender:"1",National_ID: "152",likes:0,Dislikes:0},
        {name:"Moseph",gender:"3",National_ID: "157",likes:0,Dislikes:0},
        
        
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