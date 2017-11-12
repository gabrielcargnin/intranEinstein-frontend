angular.module('intranEinstein').controller('BibliotecaController', function ($scope) {
    $scope.livros = [];
    $scope.livros = [
        {
            "dataEmprestimo" : "09-11-2017",
            "dataDevolucao" : "Nov 6, 2017"
        }
    ];

    $scope.hoje = new Date();
});