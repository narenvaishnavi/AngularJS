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
              $log.info(response); // object in console
            }, function errorHandler(response) {
              $scope.myWelcome = response.statusText;
          });
});
