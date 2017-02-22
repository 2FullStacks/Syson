(function () {
	'use strict';

	angular
		.module('app')
		.directive('fsInputText', fsInputText);

	/* @ngInject */
	function fsInputText($log) {
		var directive = {
			restrict: 'E',
			require: '^form',
			templateUrl: '../arquitetura/directives/fs-input-text/fs-input-text.template.html',
			link: link,
			scope: {
				label: '@',
				tipo: '@',
				id: '@',
				tamanhoMaximo: '@',
				tamanhoMinimo: '@',
				col: '@',
				placeholder: '@',
				ngModel: '=',
				ngRequired: '='
			}
		};
		return directive;

		function link($scope, element, attrs, formCtrl) {

			iniciar();

			function iniciar() {
				definirValoresDefault();
				verificarParametrosNaoInformado();
			}

			function verificarParametrosNaoInformado() {
				if (!$scope.templateFormCtrl.$name) {
					$log.error('Atenção: Seu form não possui a propriedade name');
				}
			}

			function definirValoresDefault() {
				$scope.templateFormCtrl = formCtrl;
				$scope.templateTipo = $scope.tipo || 'text';
				$scope.templateName = 'fsInputText' + $scope.id;
				$scope.templateLabel = $scope.label || 'Digite aqui...';
				$scope.templateId = $scope.id;
				$scope.templateRequired = $scope.ngRequired;
				$scope.templateTamanhoMaximo = $scope.tamanhoMaximo || '6';
				$scope.templateTamanhoMinimo = $scope.tamanhoMinimo || '2';
				$scope.templatePlaceHolder = $scope.placeholder || '';
				$scope.templateClassTamanho = 'input-field col s' + ( $scope.col || '6');
			}
		}
	}
})();