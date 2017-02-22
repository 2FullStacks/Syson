(function () {
	'use strict';

	angular
		.module('app')
		.directive('stCrud', SoCrud);

	/*@ngInject*/
	function SoCrud($log) {
		var soCrud = {
			templateUrl: '../arquitetura/directives/st-crud/st-crud.template.html',
			restrict: 'E',
			scope: {
				titulo: '=',
				tipo: '@',
				icone: '@',
				salvar: '@',
				remover: '@',
				limpar: '@',
				service: '='
			},
			transclude: {
				'header': '?stCrudHeader',
				'body': 'stCrudBody',
				'footer': '?stCrudFooter'
			},
			link: link
		};

		return soCrud;

		function link(scope, element, attrs) {
			iniciar();

			function iniciar() {
				verificarParametrosNaoInformados();
				definirValoresDefault();
			}

			function verificarParametrosNaoInformados() {
				if (!scope.titulo) {
					$log.error('Atenção: Não foi informado o título.');
				}
			}

			function definirValoresDefault() {
				scope.templateFormName = 'uiForm' + scope.$id;
				scope.templateClassTipo = 'panel-' + (scope.tipo || 'default');
				scope.templateTitulo = scope.titulo || '- Sem titulo -';
				scope.templateClassIcone = 'fa fa-' + (scope.icone || 'window-maximize');
			}
		}
	}
})();