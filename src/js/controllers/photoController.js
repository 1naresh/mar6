export default  function photoController($scope,dataService,$state,$stateParams){
    dataService.getPhotos($stateParams.id).then(function(res){
        $scope.photos=res.data
        .filter(function(obj){
            return obj.albumId==$stateParams.id
        })
        .slice(0,5)
    })
    $scope.toAlbums=function(){
        $state.go('albums',{id:$stateParams.id})
    }
}
photoController.$inject=['$scope','dataService','$state','$stateParams']