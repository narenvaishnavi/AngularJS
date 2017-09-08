var app = angular.module("contactController",[]);
app.controller('contactController',['$scope','$http','$log','$location','ajaxService','$window', 'userService',function($scope,$http,$log,$location,ajaxService,$window,userService) {
        $scope.formdata ={};
         $scope.errormessage ="";
    
        $scope.Feedback = function(){
              if($scope.formdata.firstName !="" && $scope.formdata.firstName != undefined ||
                        $scope.formdata.lastName != "" && $scope.formdata.lastName != undefined ||
                                $scope.formdata.email != "" && $scope.formdata.email != undefined){
              $scope.formdata = ajaxService.ajaxCall($scope,$http,$log,"POST","http://www.tutorialspoint.com/json/data.json");
              $scope.errormessage = "";
            }
            
            else{
                $scope.errormessage = ">> First Name, Last Name and Email ID are madatory!!!";
            }
            
        }
        
        $scope.cancel = function(){
           $scope.errormessage = "";   
        }
        
       
}]);