var app = angular.module('mymodule', []);
app.controller('tablecontroller', function($scope,$http,$log, ajaxService,$location,$anchorScroll) {
         
        $scope.scroll = function(scroll){
            $location.hash(scroll);
            $anchorScroll();
        }
        
       
   

});