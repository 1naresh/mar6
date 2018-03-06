export default  function albumController($scope,dataService,$state,$stateParams){
    dataService.getAlbums($stateParams.id).then(function(res){
        $scope.id=res.data.id
        $scope.albums=res.data.title.split(' ')
    })
    $scope.toPhotos=function(id){
        $state.go('photos',{id:id})
    }
    $scope.toUsers=function(){
        $state.go('users')
    }
}
albumController.$inject=['$scope','dataService','$state','$stateParams']