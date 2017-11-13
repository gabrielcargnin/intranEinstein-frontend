angular.module('intranet').factory('UsuarioService', function ($resource, $q) {
    var usuarioResource = $resource('http://dev.einsteinfloripa.xyz/api/usuarios/:idUsuario', null);
});