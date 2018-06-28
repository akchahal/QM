sap.ui.jsview("crm.torontoCRM.view.View3", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf crm.torontoCRM.view.view.View2
	 */
	getControllerName: function() {
		return "crm.torontoCRM.controller.View3";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf crm.torontoCRM.view.view.View2
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			showNavButton:true,
			navButtonType:'Back',
			showHeader: true,
			title: "View 3",
			navButtonPress : function(){
				app.to("idPageInitial");

			},
			content: []
		});

	
		return oPage;
	}

});