angular.module('intranet').factory('SimuladoService', function ($resource, $q) {
    var simuladoResource = $resource('http://dev.einsteinfloripa.xyz/api/simulados/:idSimulado', null);
});