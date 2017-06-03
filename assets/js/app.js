var app = angular.module('myapp', ['ngMaterial', 'ui.router', 'ngAnimate', 'react']);

app.service('mdDialog', function ($mdDialog) {

    this.mostrardialog = function (template, tamanioPantalla, ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: '/partials/' + template,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: tamanioPantalla
        }).then(function (answer) {
            console.log(template);
        });
    };

    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.personalizable = function (answer) {
            $mdDialog.hide(answer);
            //OCULTA Y HAZ ALGO
        };
    }
});

app.service('database', function ($http) {

    this.getAll = function (datatable, success) {
        $http.post('db/pop.php', {
            table: datatable
        }).success(success);
    };
});

app

//Sidenav

.filter('nospace', function () {
    return function (value) {
        return !value ? '' : value.replace(/ /g, '');
    };
}).filter('humanizeDoc', function () {
    return function (doc) {
        if (!doc) return;
        if (doc.type === 'directive') {
            return doc.name.replace(/([A-Z])/g, function ($1) {
                return '-' + $1.toLowerCase();
            });
        }

        return doc.label || doc.name;
    };
}).directive('menuToggle', ['$timeout', function ($timeout) {
    return {
        scope: {
            section: '='
        },
        templateUrl: 'partials/menutoggle',
        link: function ($scope, $element) {

            var controller = $element.parent().controller();

            $scope.isOpen = function () {
                return controller.isOpen($scope.section);
            };
            $scope.toggle = function () {
                controller.toggleOpen($scope.section);
            };
        }
    };
}]).directive('menuLink', function () {
    return {
        scope: {
            section: '='
        },
        templateUrl: 'partials/menulink',
        link: function ($scope, $element) {
            var controller = $element.parent().controller();

            $scope.focusSection = function () {
                controller.autoFocusContent = true;
            };
        }
    };
}).factory('menu', ['$location', '$rootScope', function ($location, $scope) {

    $scope.sections = [{
        name: 'Perfil',
        icon: 'account_circle',
        state: 'user.profile',
        type: 'link'
    }, {
        name: 'Facturación',
        icon: 'account_balance_wallet',
        state: 'user.paymentstatus',
        type: 'toggle',
        pages: [{
            name: 'Formas de pago',
            icon: 'credit_card',
            state: 'user.paymentmethod',
            type: 'link'
        }, {
            name: 'Historial',
            icon: 'history',
            state: 'user.historical',
            type: 'link'
        }]
    }];

    console.log($scope.sections);

    var self;

    return self = {
        sections: $scope.sections,

        toggleSelectSection: function (section) {
            self.openedSection = self.openedSection === section ? null : section;
        },
        isSectionSelected: function (section) {
            return self.openedSection === section;
        },

        selectPage: function (section, page) {
            page && page.url && $location.path(page.url);
            self.currentSection = section;
            self.currentPage = page;
        }
    };
}])

// Slider

.directive('slider', function ($timeout) {
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            images: '='
        },
        link: function (scope, elem, attrs) {

            scope.currentIndex = 0;

            scope.next = function () {
                scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
            };

            scope.prev = function () {
                scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
            };

            scope.$watch('currentIndex', function () {
                scope.images.forEach(function (image) {
                    image.visible = false;
                });
                scope.images[scope.currentIndex].visible = true;
            });

            /* Start: For Automatic slideshow*/

            var timer;

            var sliderFunc = function () {
                timer = $timeout(function () {
                    scope.next();
                    timer = $timeout(sliderFunc, 1500);
                }, 1500);
            };

            sliderFunc();

            scope.$on('$destroy', function () {
                $timeout.cancel(timer);
            });

            /* End : For Automatic slideshow*/
        },
        templateUrl: '/partials/slider'
    };
});