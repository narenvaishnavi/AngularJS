var app = angular.module("transactionModule",[]);
app.controller('transactionController',['$scope','$http','$log','$location','ajaxService','$window', function($scope,$http,$log,$location,ajaxService,$window) {
    $scope.errormessage = "";
    $scope.formdata = {};
    $scope.rowlimit = 15;
    $scope.info = ajaxService.ajaxCall($scope,$http,$log,"GET","https://www.w3schools.com/angular/customers.php");
    
    $scope.removeRow = function(name){
          var index = -1;
          var comArr = eval( $scope.info );
          for( var i = 0; i < comArr.length; i++ ) {
                if( comArr[i].Name === name ) {
                    index = i;
                    break;
                 }
          }
        
        $scope.info.splice( index, 1 );
        $scope.rowlimit = $scope.rowlimit - 1;
    }
    
    $scope.deposit = function(){
        $scope.errormessage ="";
         if($scope.formdata.account !="" && $scope.formdata.account != undefined ||
                        $scope.formdata.routing != "" && $scope.formdata.routing != undefined ||
                                $scope.formdata.amount != "" && $scope.formdata.amount != undefined){
             
              $scope.info.push($scope.formdata);
              $scope.rowlimit = $scope.rowlimit + 1;
              $scope.dismiss = "modal";
            }
        else{
            $scope.errormessage =">> All fields are important!";
        }
    }
    
    $scope.empty = function(){
       $scope.formdata = {};
       
    }
    
   

}]);