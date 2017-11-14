angular.module('intranet').factory('LivroService', function ($resource, $q) {
    var livroResource = $resource('http://dev.einsteinfloripa.xyz/api/livros/:idLivro', null);

    function getLivros() {
        return $q(function (resolve, reject) {
            livroResource.query(function (dados) {
                resolve({
                    livros: dados
                });
            }, function (erro) {
                reject({
                    message: erro
                });
            });
        });
    }

    return {
        getLivros : getLivros
    }
});