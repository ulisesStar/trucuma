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
				templateUrl: '/main/home'
			}
		}
	}).state('user', {
		url: '/user',
		views: {
			'main': {
				templateUrl: '/user/main'
			}
		}
	}).state('user.profile', {
		url: '/profile',
		views: {
			'main': {
				templateUrl: '/user/profile'
			}
		}
	}).state('user.paymentstatus', {
		url: '/paymentstatus',
		views: {
			'main': {
				templateUrl: '/main/user/paymentstatus'
			}
		}
	}).state('user.paymentmethod', {
		url: '/metododepago',
		views: {
			'main': {
				templateUrl: '/main/user/paymentmethod'
			}
		}
	}).state('user.historical', {
		url: '/pagohistorico',
		views: {
			'main': {
				templateUrl: '/main/user/historical'
			}
		}
	}).state('persona', {
		url: '/persona/:idPersona',
		views: {
			'main': {
				templateUrl: '/catalogo/persona',
				controller: function ($scope, $stateParams) {
					var idPersona;
					idPersona = $stateParams.idPersona;
					$scope.id = idPersona;
				}
			}
		}
	}).state('yellow', {
		url: '/yellow',
		views: {
			'main': {
				templateUrl: '/colors/yellow'
			}
		}
	}).state('purple', {
		url: '/purple',
		views: {
			'main': {
				templateUrl: '/colors/purple'
			}
		}
	}).state('blue', {
		url: '/blue',
		views: {
			'main': {
				templateUrl: '/colors/blue'
			}
		}
	}).state('green', {
		url: '/green',
		views: {
			'main': {
				templateUrl: '/colors/green'
			}
		}
	});
}]);
