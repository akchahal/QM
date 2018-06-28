sap.ui.jsview("crm.torontoCRM.view.View1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf crm.torontoCRM.view.view.View1
	 */
	getControllerName: function() {
		return "crm.torontoCRM.controller.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf crm.torontoCRM.view.view.View1
	 */
	createContent: function(oController) {
		var calendar = sap.ui.xmlfragment("crm.torontoCRM/Fragments/Calendar", oController);
		
		var oBtnEmail = new sap.m.Button('idBtnEmailView1',{
			icon:"sap-icon://email",
			enabled: false,
			press: function(e){
				oController.onEmailBtnPress(e);
			}
		});
		
		var oFooter = new sap.m.Bar({
			contentRight:[oBtnEmail]	
		});
		var oPage =  new sap.m.Page({
			showNavButton:true,
			navButtonType:'Back',
			showHeader: true,
			title: "24/7 Support",
			navButtonPress : function(){
				app.to("idPageInitial");

			},
			contentLeft :[
				new sap.m.Button({
					icon:"sap-icon://nav-back",
					press: function(){
						app.to("crm.torontoCRM.view.Initial");
					}
				})],
				footer: oFooter,
			content: [calendar]
		});
//		app.addPage(oPage);
		return oPage;
	
	
	}

});