(function () {
	'use strict';

	angular
		.module('app')
		.directive('stInputText', pdInputText);

	/* @ngInject */
	function pdInputText() {
		var directive = {
			restrict: 'E',
			require: '^form',
			templateUrl: '../arquitetura/directives/st-input-text/st-input-text.template.html',
			link: link,
			scope: {
				label: '@',
				tamanhoMaximo: '@',
				tamanhoMinimo: '@',
				ngModel: '=',
				ngRequired: '='
			}
		};
		return directive;

		function link($scope, element, attrs, formCtrl) {
			$scope.templateFormCtrl = formCtrl;
			$scope.templateInputName = 'stInputText' + $scope.$id;
			$scope.templateLabel = $scope.label;
			$scope.templateRequired = $scope.ngRequired;
			$scope.templateTamanhoMaximo = $scope.tamanhoMaximo || '10';
			$scope.templateTamanhoMinimo = $scope.tamanhoMinimo || '2';
		}
	}

})();
