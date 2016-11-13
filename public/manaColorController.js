(function () {
    'use strict';

    const manaColorController = angular.module('manaColorController', []);

    manaColorController.controller('manaColorController', ['$scope', function ($scope) {
        $scope.readonly = false;
        $scope.selectedItem = null;
        $scope.searchText = null;
        $scope.querySearch = querySearch;
        $scope.cardTypes = loadTypes();
        $scope.selectedCards = [];
        $scope.numberChips = [];
        $scope.numberChips2 = [];
        $scope.numberBuffer = '';
        $scope.autocompleteDemoRequireMatch = true;
        $scope.transformChip = transformChip;

        $scope.onChange = function () {
            if ($scope.selectedCards.length < 1) {
                $scope.$emit('mana-color', null);
            } else {
                $scope.$emit('mana-color', $scope.selectedCards);
            }
        };

        /**
         * Return the proper object when the append is called.
         */
        function transformChip (chip) {
            // If it is an object, it's already a known chip
            if (angular.isObject(chip)) {
                return chip;
            }

            // Otherwise, create a new one
            return {
                name: chip
            };
        }

        /**
         * Search for cardTypes.
         */
        function querySearch (query) {
            const results = query ? $scope.cardTypes.filter(createFilterFor(query)) : [];
            return results;
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor (query) {
            const lowercaseQuery = angular.lowercase(query);

            return function filterFn (card) {
                return card._lowername.indexOf(lowercaseQuery) === 0;
            };
        }

        function loadTypes () {
            const cardTypes = [
                {
                    name: 'black',
                    queryParam: 'b',
                    url: 'public/mana/b.jpg'
                },
                {
                    name: 'black/green split',
                    queryParam: 'bg',
                    url: 'public/mana/bg.jpg'
                },
                {
                    name: 'black/red split',
                    queryParam: 'br',
                    url: 'public/mana/br.jpg'
                },
                {
                    name: 'colorless',
                    queryParam: 'c',
                    url: 'public/mana/c.jpg'
                },
                {
                    name: 'green',
                    queryParam: 'g',
                    url: 'public/mana/g.jpg'
                },
                {
                    name: 'green/blue split',
                    queryParam: 'gu',
                    url: 'public/mana/gu.jpg'
                },
                {
                    name: 'green/white split',
                    queryParam: 'gw',
                    url: 'public/mana/gw.jpg'
                },
                {
                    name: 'phyrexian black',
                    queryParam: 'pb',
                    url: 'public/mana/pb.jpg'
                },
                {
                    name: 'phyrexian green',
                    queryParam: 'pg',
                    url: 'public/mana/pg.jpg'
                },
                {
                    name: 'phyrexian red',
                    queryParam: 'pr',
                    url: 'public/mana/pr.jpg'
                },
                {
                    name: 'phyrexian blue',
                    queryParam: 'pu',
                    url: 'public/mana/pu.jpg'
                },
                {
                    name: 'phyrexian white',
                    queryParam: 'pw',
                    url: 'public/mana/pw.jpg'
                },
                {
                    name: 'red',
                    queryParam: 'r',
                    url: 'public/mana/r.jpg'
                },
                {
                    name: 'red/green split',
                    queryParam: 'rg',
                    url: 'public/mana/rg.jpg'
                },
                {
                    name: 'red/white split',
                    queryParam: 'rw',
                    url: 'public/mana/rw.jpg'
                },
                {
                    name: 'blue',
                    queryParam: 'u',
                    url: 'public/mana/u.jpg'
                },
                {
                    name: 'blue/black split',
                    queryParam: 'ub',
                    url: 'public/mana/ub.jpg'
                },
                {
                    name: 'blue/red split',
                    queryParam: 'ur',
                    url: 'public/mana/ur.jpg'
                },
                {
                    name: 'white',
                    queryParam: 'w',
                    url: 'public/mana/w.jpg'
                },
                {
                    name: 'white/black split',
                    queryParam: 'wb',
                    url: 'public/mana/wb.jpg'
                },
                {
                    name: 'white/blue split',
                    queryParam: 'wu',
                    url: 'public/mana/wu.jpg'
                }
            ];

            return cardTypes.map((card) => {
                card._lowername = card.name.toLowerCase();
                return card;
            });
        }
    }]);
}());
