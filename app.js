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
  text.add = function (message) {
    if(message.title != null && message.title != "")
      return text.titles.push(message)
  }
})
.controller('ShowListController' , function ($scope , TodoServices){
  $scope.titles = TodoServices.list()
})
.controller('CheckboxController' , function ($scope , TodoServices){
  $scope.checkcom = function(ms){
    if(ms.done == true)
      ms.done= false
    else
      ms.done= true
  }
})
.controller('AddMessageController' , function ($scope , TodoServices){
$scope.save = function () {
  var message = {
    title : $scope.title,
    done : false
  }
  TodoServices.add(message)
  $scope.title = null
}
});
