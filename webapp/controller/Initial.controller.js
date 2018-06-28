sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("crm.torontoCRM.controller.Initial", {
		onInit : function(){},
	
		
onPressTileView1 : function(){
	app.to("idPageView1");
},
onPressTileView2 : function(){
	app.to("idPageView2");
},
onPressTileView3 : function(){
	app.to("idPageView3");
}



	/*var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("model/Appointments.json");
		oCalendar.setModel(oModel);*/
	});
});