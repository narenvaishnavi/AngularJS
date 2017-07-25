app.directive("myDirective",function(){
    return{
        restrict: "EA",
        template:"<strong>{{message}}</strong> <br/>"
    }
        
});