/* global angular*/
(function () {
    'use strict';

    const app = angular.module(
        'deckitron',
        [
            'ngMaterial',
            'ngLetterAvatar',
            'chat',
            'filters'
        ]
    );

    app.config(($mdThemingProvider) => {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('pink')
            .dark();
    });

    app.controller('DeckitronCore', ['$scope', function ($scope) {
        $scope.title = 'Deckitron';
        $scope.me = {
            name: 'Lauren'
        };
    }]);

    app.run(($log) => {
        $log.debug('Deckitron ready');
    });
}());
