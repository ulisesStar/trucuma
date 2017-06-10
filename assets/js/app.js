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

app.directive('slider', function ($timeout) {
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
