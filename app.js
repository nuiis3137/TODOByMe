angular.module ('TodoApp' , [] )
.service('TodoServices' , function (){
  var text = this
  text.titles = [
    {title : 'Piyabut' , done: false},
    {title : 'Monthikarn ', done:true}
  ]
  text.list = function () {
    return text.titles
  }
  self.add = function (message) {
    if(message.title != null && message.title != "")
      return text.titles.push(message)
  }
})
.controller('ListTodoController' , function ($scope , TodoServices){
  $scope.titles = TodoServices.list()
})
.controller('AddMessageController' , function ($scope , TodoServices){
$scope.save = function () {
  var message = {
    title : $scope.title,
    done : false
  }
  TodoService.add(message)
  $scope.title = null
}
});
