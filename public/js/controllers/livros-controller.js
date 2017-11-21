angular.module('intranet').controller('LivrosController', function ($scope, LivroService, EmprestimoService) {
    $scope.livros = [];
    $scope.meusLivros = [];
    function init() {

        LivroService.getLivrosDisponiveis().then(function (response) {
            $scope.livros = response.livros;
        }).catch(function (error) {
            console.log(error.message);
        });

        EmprestimoService.getEmprestimos().then(function (response) {
            $scope.hoje = moment().format('YYYY-MM-DD');
            $scope.meusLivros = response.emprestimos;
        }).catch(function (error) {
            console.log(error.message);
        });
    }

    $scope.emprestimo = function (livro) {

        EmprestimoService.emprestimo(livro.id_livro).then(function (response) {
            $scope.mensagem = response.dados.message;
            $scope.classe = 'alert-success';
            _.remove($scope.livros, function (l) {
                return l == livro;
            });
            $scope.meusLivros.push(livro);
        }).catch(function (error) {
            $scope.mensagem = error.dados.message;
            $scope.classe = 'alert-danger';
        });
    };

    init();

});