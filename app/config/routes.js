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

		$stateProvider
			.state('dashboard', dashboard);

	}
})();