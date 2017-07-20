<!doctype html>
<html>
  <head>
    <title>My AngularJS App</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
    <script src="js/Table.js"></script>
    <link href="css/mystyles.css" rel="stylesheet">
  </head>
  <body ng-app="mymodule" class="alignment">
      <div ng-include="'welcome.html'"></div>
      <div ng-controller = "tablecontroller">
        Table:<input type="checkbox" ng-model="showTable"/>
        List:<input type="checkbox" ng-model="showList"/><br/><br/>
        <div ng-show="showTable">
        Search: <input type="text" ng-model="searchtext"/> <br/><br/>
        <strong>You typed:{{searchtext}}</strong><br/><br/>
        Rows to Display:<input type="number" step="1" min=0 max=5 ng-model="rowlimit"/><br/><br/>
        <table>
          <thead>
              <th>Name</th>
              <th>Gender</th>
              <th>Nationality ID</th>
              <th>Likes</th>
              <th>Dislikes</th>
              <th>Action</th>
            </thead>
            <tbody>
              <tr ng-repeat="employee in employees | limitTo:rowlimit | filter:searchtext | orderBy:'name'">
                <td>{{employee.name}}</td>
                <td>{{employee.gender}}</td>
                <td>{{employee.National_ID}}</td>
                <td>{{employee.likes}}</td>
                <td>{{employee.Dislikes}}</td>
                <td>
                    <input type="button" ng-click="like(employee)" value="Like"/>
                    <input type="button" ng-click="Dislike(employee)" value="Dislike"/>
                </td>
             </tr>
            </tbody>
          </table>
        </div>
        <div ng-show="showList">
            <ul>
              <li ng-repeat="employee in employees">
               {{employee.name}}   
                <ul>
                   <li>{{employee.gender}}</li>
                   <li>{{employee.National_ID}}</li>
                </ul> 
            </li>
            </ul>
        </div>
      </div>
  </body>
</html>
