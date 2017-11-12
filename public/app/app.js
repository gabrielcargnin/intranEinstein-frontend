angular.module('intranEinstein',['ngRoute']).config(function ($routeProvider) {
    $routeProvider.when('/embaixada-amor', {
        templateUrl: 'partials/embaixada-amor.html'
    });

    $routeProvider.when('/atestado-matricula', {
        templateUrl: 'partials/atestado-matricula.html'
    });

    $routeProvider.when('/trocar-senha', {
        templateUrl: 'partials/trocar-senha.html'
    });

    $routeProvider.when('/biblioteca', {
        templateUrl: 'partials/biblioteca.html',
        controller: 'BibliotecaController'
    });
});
