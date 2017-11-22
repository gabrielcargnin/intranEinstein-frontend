angular.module('intranet').controller('LivrosController', function ($scope, LivroService, EmprestimoService) {
    $scope.livros = [];
    $scope.meusLivros = [];
    $scope.desabilitado = true;

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

    $scope.emprestimo = function () {

        var ids = _.map($scope.livrosSelecionados, function (livro) {
            return livro.id_livro;
        });
        EmprestimoService.emprestimo(ids).then(function (response) {
            $scope.mensagem = response.dados.message;
            $scope.classe = 'alert-success';
            _.each($scope.livrosSelecionados, function (livroSelecionado) {
                _.remove($scope.livros, function (livro) {
                    return livro.id_livro === livroSelecionado.id_livro;
                });
            });
            var data_emprestimo = moment().format('YYYY-MM-DD');
            var data_devolucao = moment().add(15, 'd').format('YYYY-MM-DD');
            _.each($scope.livrosSelecionados, function (livro) {
                livro.data_emprestimo = data_emprestimo;
                livro.data_devolucao = data_devolucao;
                $scope.meusLivros.push(livro);
            });
        }).catch(function (error) {
            $scope.mensagem = error.dados.message;
            $scope.classe = 'alert-danger';
        });
        $scope.emprestar = false;
    };


    $scope.confirmacao = function () {
        $scope.emprestar = true;
        $scope.livrosSelecionados = _.filter($scope.livros, function (livro) {
            return livro.selecionado;
        });
    };

    $scope.cancelar = function () {
        $scope.emprestar = false;
    };

    $scope.checkbox = function () {
        var selecionado = _.size(
            _.find($scope.livros, function (livro) {
                return livro.selecionado;
            })
        );
        $scope.desabilitado = !(selecionado > 0);
    };
    init();

});