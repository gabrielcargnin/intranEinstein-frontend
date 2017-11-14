angular.module('intranet').controller('AcessoController', function ($scope, AcessoService, store, $location) {

    $scope.acesso = {};
    $scope.invalido = false;
    $scope.loading = false;
    $scope.login = function () {
        $scope.invalido = false;
        if ($scope.formulario.$valid) {
            $scope.loading = true;
            AcessoService.login($scope.acesso)
                .then(function (response) {
                    store.set('access_token', response.dados.access_token);
                    $location.path('/biblioteca');
                })
                .catch(function (erro) {
                    $scope.invalido = true;
                    $scope.loading = false;
                    console.log(erro);
                    $scope.formulario.$submitted = false;
                });
        }
    };

});