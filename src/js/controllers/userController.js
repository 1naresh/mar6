export default  function userController($scope,dataService,$state){
    dataService.getUsers().then(function(res){
        $scope.users=res.data
    })
    $scope.toAlbums=function(id){
        $state.go('albums',{id:id})
    }
}
userController.$inject=['$scope','dataService','$state']