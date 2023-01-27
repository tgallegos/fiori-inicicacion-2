/*global QUnit*/

sap.ui.define([
	"logaligroup/invoices/controller/Main_View_Jancet.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Main_View_Jancet Controller");

	QUnit.test("I should test the Main_View_Jancet controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
