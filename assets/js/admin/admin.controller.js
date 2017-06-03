app.controller('adminCtrl', function ($scope, $rootScope, $http, menu, mdDialog) {

    $scope.iniciosesion = function (ev) {
        mdDialog.mostrardialog('login', $scope.customFullscreen, ev);
    };

    $scope.frutas = [{
        nombre: "Manzana",
        color: "rojo"
    }, {
        nombre: "Plantano",
        color: "amarillo"
    }, {
        nombre: "Sandia",
        color: "rojo"
    }, {
        nombre: "Durazno",
        color: "amarillo"
    }, {
        nombre: "Mango",
        color: "amarillo"
    }];

    $scope.botones = [{
        title: 'Home',
        icon: 'whatshot',
        color: 'red',
        sref: 'home'
    }, {
        title: 'Yellow',
        icon: 'flash_on',
        color: 'yellow',
        sref: 'yellow'
    }, {
        title: 'Purple',
        icon: 'star_rate',
        color: 'purple',
        sref: 'purple'
    }, {
        title: 'Blue',
        icon: 'filter_hdr',
        color: 'blue',
        sref: 'blue'
    }, {
        title: 'Green',
        icon: 'nature',
        color: 'green',
        sref: 'green'
    }];

    console.log($scope.botones);

    // Slider

    $scope.images = [{ title: 'Creativity', src: 'http://www.voicehacker.co.uk/wp-content/uploads/2014/07/meet-the-artist-4.jpg' }, { title: 'Goals', src: 'http://www.myrkothum.com/wp-content/uploads/2014/05/reach-your-goals.jpg' }, { title: 'Effectiveness', src: 'http://www.basketrevolution.es/media/wysiwyg/basket.jpg' }, { title: 'Passion', src: 'http://cdn-media-4.lifehack.org/wp-content/files/2014/05/15-Things-Truly-Passionate-People-Do-Differently.jpg' }];

    $http.get('/data/personasData').then(function (data) {
        $scope.personas = data.data;
        console.log(data.data);
    });

    $scope.nuevaPersona = function(data){
        $http.post('/data/personasData').then(function (data) {
            $scope.personas = data.data;
            console.log(data.data);
        });
    }

    $http.get('/data/dataObj').then(function (data) {
        $scope.obj = data.data;
        console.log(data.data);
    });

    $http.get('/data/dataImagen').then(function (data) {
        $scope.imagenes = data.data;
        console.log(data.data);
    });


});
