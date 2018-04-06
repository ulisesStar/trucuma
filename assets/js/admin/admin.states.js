app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {


	function template(url, template, controller, oz, params) {
		let obj = {
			url: url,
			params: params,
			views: {
				'main': {
					templateUrl: template,
					controller: controller + ' as ctrl'
				}
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([oz]);
					}
				]
			}
		}
		return obj
	}

	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', template('/', '/admin/home', 'homeCtrl', 'adminhome'))

	.state('servicios', template('/servicios', '/admin/servicios', 'serviciosCtrl', 'adminservicios'))
	.state('servicio', template('/servicio/:id', '/admin/servicio', 'servicioCtrl', 'adminservicio', { 'id' : null}))

	.state('abogados', template('/abogados', '/admin/abogados', 'abogadosCtrl', 'adminabogados'))
	.state('abogado', template('/abogado/:id', '/admin/abogado', 'abogadoCtrl', 'adminabogado', { 'id' : null}))

	.state('prospectos', template('/prospectos', '/admin/prospectos', 'prospectosCtrl', 'adminprospectos'))
	.state('prospecto', template('/prospecto', '/admin/prospecto', 'prospectoCtrl', 'adminprospecto'))

	.state('topicos', template('/topicos', '/admin/topicos', 'topicosCtrl', 'admintopicos'))
	.state('topico', template('/topico/:id', '/admin/topico', 'topicoCtrl', 'admintopico', { 'id' : null}))


}]);
