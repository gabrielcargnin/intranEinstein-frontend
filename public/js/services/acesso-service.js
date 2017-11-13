angular.module('intranet').factory('AcessoService', function ($resource, $q, store) {


    const grant_type = 'password';
    const client_id = '4';
    const client_secret = 'e3wxnL5J6OSCCs54YZfNdHBpdFzlpY0K1YHAeAMA';
    const scope = '*';

    var loginResource = $resource('http://localhost:8000/oauth/token', {}, {
        save: {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    });

    // var logoutResource = $resource('http://dev.einsteinfloripa.xyz/oauth/logout/');
    //
    // var changePasswordResource = $resource('http://dev.einsteinfloripa.xyz/oauth/changePassword/');

    function logout() {

    }

    function getToken() {
        return store.get('access_token');
    }

    function login(credentials) {
        credentials.scope = scope;
        credentials.grant_type = grant_type;
        credentials.client_id = client_id;
        credentials.client_secret = client_secret;
        return $q(function (resolve, reject) {
            loginResource.save(credentials, function (dados) {
                resolve({
                    dados: dados
                });
            }, function (erro) {
                reject({
                    message: erro
                });
            });
        });
    }

    return {
        login: login,
        getToken: getToken
    }
});
