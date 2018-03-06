import  userController   from './controllers/userController'; 
import   photoController   from './controllers/photoController'; 
import   albumController    from './controllers/albumController'; 
export function config($stateProvider,$urlRouterProvider){
    $stateProvider
    .state({
        name:'users',
        url:'/users',
        template:require('../templates/users.html'),
        controller:userController
    })
    .state({
        name:'albums',
        url:'/albums/:id',
        template:require('../templates/albums.html'),
        controller:albumController
    })
    .state({
        name:'photos',
        url:'/photos/:id',
        template:require('../templates/photos.html'),
        controller:photoController
    })
    $urlRouterProvider.otherwise('/users')
}
config.$inject=['$stateProvider','$urlRouterProvider'] 