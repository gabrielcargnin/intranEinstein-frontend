angular.module('intranet').factory('LivroService', function ($resource, $q) {
    var livroResource = $resource('http://dev.einsteinfloripa.xyz/api/livros/:idLivro', null);
});