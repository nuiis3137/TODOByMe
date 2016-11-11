angular.module ('ContactApp' , [] )
.service('contactServices' , function (){
  var self = this
  self.contacts = [
    {fullname : 'Piyabut Nawanichbumrung' , nickname : 'Nuiis' , phone : '087-xxxxxxxx'},
    {fullname : '21231123123 ', nickname : '1' , phone : '1'},
    {fullname : '2 ', nickname : '2' , phone : '2'}
  ]
  self.list = function () {
    return self.contacts
  }
  self.add = function (contact) {
    self.contacts.push(contact)
  }
})
.controller('ListContactController' , function ($scope , contactServices){
  $scope.contacts = contactServices.list()
})
.controller('AddContactController' , function ($scope , contactServices){
$scope.save = function () {
  var contact = {
    fullname: $scope.fullname,
    nickname: $scope.nickname,
    phone: $scope.phone
    }
      contactServices.add(contact)
      resetform()
  }
  function resetform(){
  $scope.fullname = ''
  $scope.nickname = ''
  $scope.phone = ''
}
});
