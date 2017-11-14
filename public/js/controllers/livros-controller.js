angular.module('intranet').controller('LivrosController', function ($scope, LivroService, EmprestimoService) {

    function init() {
        LivroService.getLivros().then(function (response) {
            $scope.livros = response.livros;
        }).catch(function (error) {
            console.log(error.message);
        });

        EmprestimoService.getEmprestimos().then(function (response) {
            $scope.meuLivros = response.emprestimos;
        }).catch(function (error) {
            console.log(error.message);
        });

    }

    init();

});