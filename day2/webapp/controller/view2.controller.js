sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("pc.day2.controller.view2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf pc.day2.view.view2
		 */
		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel("json/data.json");
			this.getView().setModel(oModel);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("RouteView2").attachPatternMatched(this._matched, this);
		},
		back: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteView1");
		},
		
		_matched: function(oEvent){
			var oObject = oEvent.getParameter("arguments");
			var sPath = decodeURIComponent(oObject.path);
			this.getView().byId("sctab").bindElement(sPath);
		}
		

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf pc.day2.view.view2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf pc.day2.view.view2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf pc.day2.view.view2
		 */
		//	onExit: function() {
		//
		//	}

	});

});