(function () {
	'use strict';

	angular
		.module('app')
		.service('StAlertService', StAlertService);

	/* @ngInject */
	function StAlertService(toastr) {

		this.showSuccess = showSuccess;
		this.showError = showError;
		this.showInfo = showInfo;

		function showSuccess(mensagem, titulo) {
			titulo = titulo || 'Ok';
			toastr.success(titulo, mensagem);
		}

		function showError(mensagem, titulo) {
			titulo = titulo || 'Ok';
			toastr.error(titulo, mensagem);
		}

		function showInfo(mensagem, titulo) {
			titulo = titulo || 'Ok';
			toastr.info(titulo, mensagem);
		}
	}

})();