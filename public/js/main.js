angular.module('intranet',['ngRoute', 'ngResource', 'angular-storage', 'routeStyles']).config(function ($routeProvider) {


    $routeProvider.when('/', {
        templateUrl: 'partials/login.html',
        controller: 'AcessoController',
        css: 'css/login.css'
    });

    $routeProvider.when('/embaixada-amor', {
        templateUrl: 'partials/embaixada-amor.html',
        css: 'css/inicio.css'
    });

    $routeProvider.when('/atestado-matricula', {
        templateUrl: 'partials/atestado-matricula.html',
        css: 'css/inicio.css'
    });

    $routeProvider.when('/trocar-senha', {
        templateUrl: 'partials/trocar-senha.html',
        css: 'css/inicio.css'
    });

    $routeProvider.when('/biblioteca', {
        templateUrl: 'partials/biblioteca.html',
        controller: 'LivrosController',
        css: ['css/biblioteca.css', 'css/inicio.css']
    });
});
