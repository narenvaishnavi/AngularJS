app.factory('ajaxService',function(){
    return {
        ajaxCall: function($scope,$http,$log,type,url){
        if(type == "GET"){
            $http({
            method : type,
            url : url
          }).then(function sucessHandler(response) {
              if(response.data.records == undefined)
                    $scope.myWelcome = response.data;
              else
                    $scope.info = response.data.records;
            }, function errorHandler(response) {
              $scope.myWelcome = response.statusText;
          });
        }
        else if(type == "POST"){
            $http({
                method : type,
                url : url,
                data : $scope.formdata,
                headers : { 'Content-Type': 'application/x-www-form-urlencoded'}
              }).then(function sucessHandler(response) {
                  $scope.formdata = response.data;
                }, function errorHandler(response) {
                  $scope.myWelcome = response.statusText;
              });
        }
        }       
    };
});