angular.module('intranet').factory('EmprestimoService', function ($resource, $q) {
    var livroResource = $resource('http://dev.einsteinfloripa.xyz/api/emprestimos');

    function getEmprestimos() {
        return $q(function (resolve, reject) {
            livroResource.query(function (dados) {
                resolve({
                    emprestimos: dados
                });
            }, function (erro) {
                reject({
                    dados: erro
                });
            });
        });
    }

    function emprestimo(idLivro) {
        return $q(function (resolve, reject) {
            livroResource.save({id_livro : idLivro}, function (dados) {
                resolve({
                    dados: dados
                });
            }, function (erro) {
                reject({
                    dados: erro
                });
            });
        });
    }

    return {
        getEmprestimos : getEmprestimos,
        emprestimo : emprestimo
    }
});