sap.ui.jsview("crm.torontoCRM.view.Initial", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.Initial
	 */
	getControllerName: function() {
		return "crm.torontoCRM.controller.Initial";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.Initial
	 */
	createContent: function(oController) {
		
		

		
		var oText = new sap.m.Text( {
			text: "Hi this is a test for planning calendar"
		});
		var oTileView1 = new sap.m.GenericTile({
			header: "View 1",
			press: oController.onPressTileView1
		});
		var oTileView2 = new sap.m.GenericTile({
			header:"View 2",
			press : oController.onPressTileView2
		});
		var oTileView3 = new sap.m.GenericTile({
			header:"View 3",
			press : oController.onPressTileView3
		});
		var oFlexBox = new sap.m.FlexBox({
			items: [oTileView1, oTileView2,oTileView3],
			justifyContent: 'SpaceAround'
		
		});
/************ ADD ALL PAGES HERE****************/	
		var oPage = new sap.m.Page({
			id:"idPageInitial",
			title: "{i18n>24/7 SUPPORT}",
			content: [oFlexBox ]
		});
		
		var oPageView1 =  sap.ui.view({
			id:"idPageView1",
			viewName:"crm.torontoCRM.view.View1",
			type: sap.ui.core.mvc.ViewType.JS
		});
		var oPageView2 =  sap.ui.view({
			id:"idPageView2",
			viewName:"crm.torontoCRM.view.View2",
			type: sap.ui.core.mvc.ViewType.JS
		});
		var oPageView3 = sap.ui.view({
			id:"idPageView3",
			viewName:"crm.torontoCRM.view.View3",
			type: sap.ui.core.mvc.ViewType.JS
		});
		app.addPage(oPage).addPage(oPageView1).addPage(oPageView2).addPage(oPageView3);
		return app;
	}

});

	/*	sap.ui.xmlfragment(“Calendar”,sap.ui.controller(“crm.torontoCRM.controller.Initial”));*/
		
	/*	var cal = new sap.m.PlanningCalendar("idCalendar",{
			startDate:new Date("2015", "11", "15", "8", "0"),
			viewkey:""
			rows:"",
			appointmentSelect:"",
			intervalSelect:"",
			toolbarContent:[],
			views: [],
			
		});*/