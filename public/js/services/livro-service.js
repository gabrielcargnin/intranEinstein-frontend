angular.module('intranet').factory('LivroService', function ($resource, $q) {
    var livroResource = $resource('http://dev.einsteinfloripa.xyz/api/livros/:idLivro', {}, {
        getDisponiveis: {
            method : 'GET',
            url : 'http://dev.einsteinfloripa.xyz/api/livros/disponiveis',
            isArray : true
        }
    });

    function getLivros() {
        return $q(function (resolve, reject) {
            livroResource.query(function (dados) {
                resolve({
                    livros: dados
                });
            }, function (erro) {
                reject({
                    dados: erro
                });
            });
        });
    }

    function getLivrosDisponiveis() {
        return $q(function (resolve, reject) {
            livroResource.getDisponiveis(function (dados) {
                resolve({
                    livros: dados
                });
            }, function (erro) {
                reject({
                    dados: erro
                });
            });
        });
    }

    return {
        getLivros : getLivros,
        getLivrosDisponiveis : getLivrosDisponiveis
    }
});