angular.module('diretivas', [])
    .directive('meuFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/templates/meu-footer.html'
        };
    })
    .directive('meuMenu', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/templates/meu-menu.html'
        };
    });
