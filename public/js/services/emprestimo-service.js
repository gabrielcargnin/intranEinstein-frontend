angular.module('intranet').factory('EmprestimoService', function ($resource, $q) {
    var livroResource = $resource('http://dev.einsteinfloripa.xyz/api/emprestimos');

    function getEmprestimos() {
        return $q(function (resolve, reject) {
            livroResource.query({idUsuario: 4} ,function (dados) {
                resolve({
                    emprestimos: dados
                });
            }, function (erro) {
                reject({
                    message: erro
                });
            });
        });
    }

    return {
        getEmprestimos : getEmprestimos
    }
});