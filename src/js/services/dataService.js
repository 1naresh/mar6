export default function dataService($q,$http){
    this.getUsers = function () {
        var defered = $q.defer();
        $http({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users'           
        }).then(function(posRes){
            defered.resolve(posRes)
                },function(errRes){
            defered.reject(errRes)
        })
        return defered.promise;
    };
    this.getAlbums = function (id) {
        var defered = $q.defer();
        $http({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/albums/'+id
           
        }).then(function(posRes){
            defered.resolve(posRes)
                },function(errRes){
            defered.reject(errRes)
        })
        return defered.promise;
    };
    this.getPhotos = function () {
        var defered = $q.defer();
        $http({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/photos'
           
        }).then(function(posRes){
            defered.resolve(posRes)
                },function(errRes){
            defered.reject(errRes)
        })
        return defered.promise;
    };
}