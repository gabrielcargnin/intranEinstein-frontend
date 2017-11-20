angular.module('intranet').controller('LivrosController', function ($scope, LivroService, EmprestimoService) {
    $scope.livros = [];
    $scope.meusLivros = [];
    $scope.livros.tamanho = 0;
    $scope.meusLivros.tamanho = 0;

    function init() {
        LivroService.getLivros().then(function (response) {
            $scope.livros = response.livros;
            $scope.livros.tamanho = _.size($scope.livros);
            console.log(_.size($scope.livros));
        }).catch(function (error) {
            console.log(error.message);
        });

        EmprestimoService.getEmprestimos().then(function (response) {
            $scope.hoje = moment().format('DD-MM-YYYY');
            $scope.meusLivros = response.emprestimos;
            $scope.meusLivros.tamanho = _.size($scope.meusLivros);
        }).catch(function (error) {
            console.log(error.message);
        });

    }

    $scope.emprestimo = function (livro) {
        EmprestimoService.emprestimo(livro.id_livro).then(function (response) {
            $scope.mensagem = response.message;
        }).catch(function (error) {
            $scope.mensagem = error.dados.message;
        });
    };

    init();

});