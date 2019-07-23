sap.ui.define(["sap/ui/core/Control"],

function(Control){
	
	var customHeading = Control.extend("pc.day2.custom.customHeading",{
		metadata:{
			properties:{
				"prop1":""
			},
			events:{}
		},
		init: function(){
			
		},
		renderer: function(oRm, oControl){
			oRm.write("<h1>"+ oControl.getProp1() +"</h1>");
		}
	});
	return customHeading;

});