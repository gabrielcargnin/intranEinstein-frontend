angular.module('intranet').controller('LivrosController', function ($scope, LivroService, EmprestimoService) {

    function init() {
        LivroService.getLivros().then(function (response) {
            $scope.livros = response.livros;
        }).catch(function (error) {
            console.log(error.message);
        });

        EmprestimoService.getEmprestimos().then(function (response) {
            $scope.hoje = moment().format('DD-MM-YYYY');
            $scope.meusLivros = response.emprestimos;
            console.log(response.emprestimos);
        }).catch(function (error) {
            console.log(error.message);
        });

    }

    $scope.emprestimo = function (livro) {
        EmprestimoService.emprestimo(livro.id_livro).then(function (response) {
            $scope.mensagem = response.message;
        }).catch(function (error) {
            $scope.mensagem = error.message;
        });
    };

    init();

});