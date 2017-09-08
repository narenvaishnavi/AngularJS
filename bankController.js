var app = angular.module("myModule",[]);
app.controller('bankController',['$scope','$http','$log','$location','$window', function($scope,$http,$log,$location,$window) {
    
    $scope.form = {};
    $scope.errormessage = "";
    
     $scope.submit = function(){
            $scope.errormessage = "";
            if($scope.form.name == undefined ||
                    $scope.form.name == "" || $scope.form.password == undefined
                            || $scope.form.password == ""){
                $scope.errormessage =" >> Please enter email and Password";
            }
         
        else{
                window.location.href = 'loggedBank.html';
               
            }
        }
     
     $scope.cancel =function(){
         $scope.errormessage = "";
     }

}]);