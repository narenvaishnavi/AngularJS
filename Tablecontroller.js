var app = angular.module('mymodule', []);
app.controller('tablecontroller', function($scope,$http,$log, ajaxService) {
          $scope.formdata ={};
          scope = $scope;
          $scope.myWelcome = ajaxService.ajaxCall($scope,$http,$log,"GET","http://www.tutorialspoint.com/json/data.json");
          $scope.info = ajaxService.ajaxCall($scope,$http,$log,"GET","https://www.w3schools.com/angular/customers.php")
    
         
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
         
        $scope.submit = function(formdata){
            scope.errormessage = "";
            if(formdata.name == undefined ||
                    formdata.name == "" || formdata.country == undefined
                            || formdata.country == ""){
                scope.errormessage =" >> Please enter email and Password";
            }
        else{
                $scope.formdata = ajaxService.ajaxCall($scope,$http,$log,"POST","http://www.tutorialspoint.com/json/data.json")
            }
        }
        
         $scope.cancel = function(formData){
            scope.formdata = "";
            scope.errormessage = "";
    }
        
       
   

});