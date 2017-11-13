angular.module('intranet').factory('AuthInterceptor', function ($location, store, $q) {
    return {
        request: function (config) {
            config.headers = config.headers || {};

            if (store.get('access_token')) {
                config.headers['Authorization'] = 'Bearer ' + store.get('access_token');
            }

            return config;
        },

        responseError: function (response) {
            if (response.status === 401 || response.status === 403) {
                $location.path('/');
            }

            return $q.reject(response);
        }
    }
})
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    });

