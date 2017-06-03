app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

	$urlRouterProvider.otherwise('/');
	$stateProvider

	.state('home', {
		url: '/',
		views: {
			'main': {
				templateUrl: '/admin/home'
			}
		}
	})
	.state('lista_trabajos', {
		url: '/',
		views: {
			'main': {
				templateUrl: '/admin/lista_trabajos'
			}
		}
	})
	.state('trabajo', {
		url: '/',
		views: {
			'main': {
				templateUrl: '/admin/agregar_trabajo'
			}
		}
	})
}]);
