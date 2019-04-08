/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
(function($){
	"use strict";
	
	var app = angular.module('seminar', []);
	var REG_SUCCESS_MESSAGE = "Participant registered succesfully\n세미나 신청이 완료되었습니다.";
	var INVALID_FORM_MESSAGE = 'Some fields are incorrect or missing\n지정되지 않은 항목이 있습니다.';
	
	app.controller('ApplyController', ['$scope', '$http', '$log', '$window', function($scope, $http, $log, $window){
		var self = this;
		
		self.initdata = {
			attend: "Y", // default value
			event: "ACX - Collaborative Project Controls & Cost Management Nov 11, 2016"
		};
		self.reg = {};
		self.saved = false;
		self.successMessage = REG_SUCCESS_MESSAGE;
		self.invalidMessage = INVALID_FORM_MESSAGE;
		
		self.apply = function(form){
			if(form.$valid){
				// save on db
				$http({
					url: '/ACX/Seminar/addParticipant.action',
					params: self.reg,
					method: 'POST'
				}).then(function(){
					$log.debug('/ACX/Seminar/addParticipant.action::OK');
					$window.alert(self.successMessage);
					self.saved = true;
					
					self.reset();
				});
				
			} else {
				$window.alert(self.invalidMessage);
			}
			
		};
		
		self.reset = function (form) {
			if (form) {
				form.$setPristine();
				
				//not in AngularJS v1.2
				//form.$setUntouched();
			}
			self.reg = angular.copy(self.initdata);
		};
		
		self.cancel = function(form){
			self.reset(form);
			$window.close();	
		};
		
		self.reset();
		
	}]);
	
})(jQuery);