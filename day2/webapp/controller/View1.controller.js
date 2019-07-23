sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("pc.day2.controller.View1", {
		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel("json/data.json");
			this.getView().setModel(oModel);
			var list = this.getView().byId("carrtab");
			var oBinding = list.getBinding("items");
			// oBinding.filter(new sap.ui.model.Filter("carrier/carrId", "EQ", "LH" ));
			
			
		},
		
		onSelectionChange: function(oEvent){
			var sPath = oEvent.getParameter("listItem").getBindingContext().getPath();
			this.getView().byId("conntab").bindElement(sPath);
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteView2", {path: encodeURIComponent(sPath)});
			
			
		},
		butPress: function(oEvent){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteView2");
			// this.getView().destroy();
		}
	});
});