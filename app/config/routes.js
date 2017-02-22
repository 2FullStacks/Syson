(function () {
	angular.module('app')
		.config(config);

	/* @ngInject */
	function config($stateProvider) {

		const dashboard = {
			name: 'dashboard',
			url: '/dashboard',
			templateUrl: '../app/views/dashboard/dashboard.html'
		};

		const protocolo = {
			name: 'protocolo',
			url: '/protocolo',
			templateUrl: '../app/views/protocolo/protocolo.html'
		};

		$stateProvider
			.state('dashboard', dashboard)
			.state('protocolo', protocolo);

	}
})();