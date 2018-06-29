sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("crm.torontoCRM.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf crm.torontoCRM.view.view.View1
		 */
			dateFormatter: function(s){
				return new Date(s[0], s[1], s[2], s[3], s[4]);
			},
			onInit: function() {
				var testModel = new JSONModel("mockdata/Appointments.json");
				//	testModel.loadData("mockdata/Appointments.json");
				var data = this.getData();
				this.bindData(data);	
			},
			bindData : function(data){
				var oModel = new JSONModel();
					oModel.setData(data);
					this.getView().setModel(oModel);
			},
			handleAppointmentSelect: function(oEvent) {
			//	this.handlePopoverPress(oEvent);
				sap.ui.getCore().byId('idBtnEmailView1').setEnabled(true);
				if (!this._oPopover) {
					this._oPopover = sap.ui.xmlfragment("crm.torontoCRM/Fragments.InfoPopover", this);
					this.getView().addDependent(this._oPopover);
					this._oPopover.bindElement("/ProductCollection/0");
				}
	
			//	this._oPopover.openBy(oEvent.getSource());
			},
		/*******************On Handover Email button press********************/
			onEmailBtnPress: function(e){
			//	 sap.m.MessageToast.show('Open th email client to send an email',{});
				 var sla = " Hi John,\n\n "+"Next IRT in : 110 mins \n"+ "Next ORT is : 240 mins \n" + "There is one unassigned VH \n\n"+"https://support.wdf.sap.corp/sap/support/message/002075129400003295552018 \n"+  "\nRegards, \n"+" Amrit";
				 sap.m.URLHelper.triggerEmail('amritpal.kaur@sap.com', 'QM Handover' , sla);
			},
		/******************On Component Serach selection*********************/	
			handleSelectionFinish: function(){
				var category=[];
				var getdata = this.getData();
					category[0] = getdata.Category[0];
					category[1]= getdata.Category[1];
				var data = {
					startDate: new Date(),
					Category: category
				};
				
				this.bindData(data);
			},
		/*********************INFO POPOVER*********************/
			handlePopoverPress: function (oEvent) {
	
				// create popover
				if (!this._oPopover) {
					this._oPopover = sap.ui.xmlfragment("crm.torontoCRM/Fragments.InfoPopover", this);
					this.getView().addDependent(this._oPopover);
					this._oPopover.bindElement("/ProductCollection/0");
				}
	
				this._oPopover.openBy(oEvent);
			},
			getDate: function(date){
				date.setDate(date.getDate()+1);
				return date;
			},
		getData: function(){
			var pic = pic;
			var date1 = new Date('2018','05','25','01','0');
			var date2 = new Date('2018','05','25','09','0');
			var date3 = new Date('2018','05','25','13','0');
			var date4 = new Date('2018','05','25','17','0');
			var date5 = new Date('2018','05','25','21','0');
			var data = {
				startDate: new Date('2018','05','25','01','0'),
				Category: [{
					name: "CRM",
					role: "",
					appointments: [
						{start:date1,end:date2,title:'John Smith',type:'Type04',pic:pic,Region:'APJ'},
						{start:date2,end:date3,title:'Muhammad Li',type:'Type04',pic:pic,Region:'EMEA'},
						{start:date3,end:date4,title:"Amrit Paul",type: "Type04",pic:pic,Region: "EMEA"},
						{start:date4,end:date5,title: "Gisho Prince",type: "Type04",pic: pic,Region: "Americas"},
						{start: new Date("2018", "05", "26","09","0"),end: new Date("2018", "05", "26","13","0"),title: "Muhammad Li",type: "Type04",pic: pic,Region: "EMEA"},
						{start: new Date("2018", "05", "26","13","0"),end: new Date("2018", "05", "26","17","0"),title: "Amrit Paul",type: "Type04",pic: pic,Region: "EMEA"},
						{start: new Date("2018", "05", "26", "17","0"),end: new Date("2018", "05", "26", "21", "00"),title: "Gisho Prince",type: "Type04",pic: pic,tentative: false,Region: "Americas"},
						{start: new Date("2018", "05", "26", "21","0"),end: new Date("2018", "05", "27", "01", "00"),title: "Amrit Paul",type: "Type04",pic: pic,Region: "Americas"},
						{start: new Date("2018", "05", "27", "01","0"),end: new Date("2018", "05", "27", "09", "00"),title: "John Smith",pic: pic,type: "Type04",Region: "APJ"},
						{start: new Date("2018", "05", "27","09","0"),end: new Date("2018", "05", "27","13","0"),title: "Muhammad Li",type: "Type04",pic: pic,Region: "EMEA"},
						{start: new Date("2018", "05", "27","13","0"),end: new Date("2018", "05", "27","17","0"),title: "Amrit Paul",type: "Type04",pic: pic,Region: "EMEA"},
						{start: new Date("2018", "05", "27", "17","0"),end: new Date("2018", "05", "27", "21", "00"),title: "Gisho Prince",type: "Type04",pic: pic,Region: "Americas"},
						{start: new Date("2018", "05", "27", "21","0"),end: new Date("2018", "05", "28", "01", "00"),title: "Jaemin White",type: "Type04",pic: pic,Region: "Americas"}
						]
				},
					{
						name: "HANA Platform",
						role: "",
						appointments: [
							{
							start: new Date("2018", "05", "25", "01", "00"),
							end: new Date("2018", "05", "25", "09", "00"),
							title: "Kevin Wang",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25","09","0"),
							end: new Date("2018", "05", "25","13","0"),
							title: "Manigwa",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25","13","0"),
							end: new Date("2018", "05", "25","17","0"),
							title: "Brian Peterson",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25", "17", "00"),
							end: new Date("2018", "05", "25", "21", "00"),
							title: "David Brown",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25", "21", "00"),
							end: new Date("2018", "05", "26", "01", "00"),
							title: "Lynda",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "01", "00"),
							end: new Date("2018", "05", "26", "09", "00"),
							title: "Kevin Wang",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26","09","0"),
							end: new Date("2018", "05", "26","13","0"),
							title: "Manigwa",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26","13","0"),
							end: new Date("2018", "05", "26","17","0"),
							title: "Brian Peterson",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "17", "00"),
							end: new Date("2018", "05", "26", "21", "00"),
							title: "Ashley ",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "21", "00"),
							end: new Date("2018", "05", "27", "01", "00"),
							title: "Jamson Smith",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "01", "00"),
							end: new Date("2018", "05", "27", "09", "00"),
							title: "Kevin Wang",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27","09","0"),
							end: new Date("2018", "05", "27","13","0"),
							title: "Manigwa",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27","13","0"),
							end: new Date("2018", "05", "27","17","0"),
							title: "Brian Peterson",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "17", "00"),
							end: new Date("2018", "05", "27", "21", "00"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "21", "00"),
							end: new Date("2018", "05", "28", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						}
						]
					},
					{
						name: "S4HANA Sales",
						role: "",
						appointments: [{
							start: new Date("2018", "05", "25","01","0"),
							end: new Date("2018", "05", "25","09","0"),
							title: "John Smith",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25","09","0"),
							end: new Date("2018", "05", "25","13","0"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25","13","0"),
							end: new Date("2018", "05", "25","17","0"),
							title: "Amrit Paul",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25", "17", "00"),
							end: new Date("2018", "05", "25", "21", "00"),
							title: "Gisho Prince",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25", "21", "00"),
							end: new Date("2018", "05", "26", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "01", "00"),
							end: new Date("2018", "05", "26", "09", "00"),
							title: "John Smith",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26","09","0"),
							end: new Date("2018", "05", "26","13","0"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26","13","0"),
							end: new Date("2018", "05", "26","17","0"),
							title: "Amrit Paul",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "17", "00"),
							end: new Date("2018", "05", "26", "21", "00"),
							title: "Gisho Prince",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "21", "00"),
							end: new Date("2018", "05", "27", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "01", "00"),
							end: new Date("2018", "05", "27", "09", "00"),
							title: "John Smith",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27","09","0"),
							end: new Date("2018", "05", "27","13","0"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27","13","0"),
							end: new Date("2018", "05", "27","17","0"),
							title: "Amrit Paul",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "17", "00"),
							end: new Date("2018", "05", "27", "21", "00"),
							title: "Gisho Prince",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "21", "00"),
							end: new Date("2018", "05", "28", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						}]
					},
					{
						name: "S4HANA PLM MAN",
						role: "",
						appointments: [{
							start: new Date("2018", "05", "25","01","0"),
							end: new Date("2018", "05", "25","09","0"),
							title: "John Smith",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25","09","0"),
							end: new Date("2018", "05", "25","13","0"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25","13","0"),
							end: new Date("2018", "05", "25","17","0"),
							title: "Amrit Paul",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25", "17", "00"),
							end: new Date("2018", "05", "25", "21", "00"),
							title: "Gisho Prince",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25", "21", "00"),
							end: new Date("2018", "05", "26", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "01", "00"),
							end: new Date("2018", "05", "26", "09", "00"),
							title: "John Smith",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26","09","0"),
							end: new Date("2018", "05", "26","13","0"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26","13","0"),
							end: new Date("2018", "05", "26","17","0"),
							title: "Amrit Paul",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "17", "00"),
							end: new Date("2018", "05", "26", "21", "00"),
							title: "Gisho Prince",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "21", "00"),
							end: new Date("2018", "05", "27", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "01", "00"),
							end: new Date("2018", "05", "27", "09", "00"),
							title: "John Smith",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27","09","0"),
							end: new Date("2018", "05", "27","13","0"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27","13","0"),
							end: new Date("2018", "05", "27","17","0"),
							title: "Amrit Paul",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "17", "00"),
							end: new Date("2018", "05", "27", "21", "00"),
							title: "Gisho Prince",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "21", "00"),
							end: new Date("2018", "05", "28", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						}]
					},
					{
						name: "SCM",
						role: "",
						appointments: [{
							start: new Date("2018", "05", "25","01","0"),
							end: new Date("2018", "05", "25","09","0"),
							title: "John Smith",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25","09","0"),
							end: new Date("2018", "05", "25","13","0"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25","13","0"),
							end: new Date("2018", "05", "25","17","0"),
							title: "Amrit Paul",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25", "17", "00"),
							end: new Date("2018", "05", "25", "21", "00"),
							title: "Gisho Prince",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25", "21", "00"),
							end: new Date("2018", "05", "26", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "01", "00"),
							end: new Date("2018", "05", "26", "09", "00"),
							title: "John Smith",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26","09","0"),
							end: new Date("2018", "05", "26","13","0"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26","13","0"),
							end: new Date("2018", "05", "26","17","0"),
							title: "Amrit Paul",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "17", "00"),
							end: new Date("2018", "05", "26", "21", "00"),
							title: "Gisho Prince",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "21", "00"),
							end: new Date("2018", "05", "27", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "01", "00"),
							end: new Date("2018", "05", "27", "09", "00"),
							title: "John Smith",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27","09","0"),
							end: new Date("2018", "05", "27","13","0"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27","13","0"),
							end: new Date("2018", "05", "27","17","0"),
							title: "Amrit Paul",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "17", "00"),
							end: new Date("2018", "05", "27", "21", "00"),
							title: "Gisho Prince",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "21", "00"),
							end: new Date("2018", "05", "28", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						}]
					},
					{
						name: "BR Localization",
						role: "",
						appointments: [{
							start: new Date("2018", "05", "25","01","0"),
							end: new Date("2018", "05", "25","09","0"),
							title: "John Smith",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25","09","0"),
							end: new Date("2018", "05", "25","13","0"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25","13","0"),
							end: new Date("2018", "05", "25","17","0"),
							title: "Amrit Paul",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25", "17", "00"),
							end: new Date("2018", "05", "25", "21", "00"),
							title: "Gisho Prince",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25", "21", "00"),
							end: new Date("2018", "05", "26", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "01", "00"),
							end: new Date("2018", "05", "26", "09", "00"),
							title: "John Smith",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26","09","0"),
							end: new Date("2018", "05", "26","13","0"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26","13","0"),
							end: new Date("2018", "05", "26","17","0"),
							title: "Amrit Paul",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "17", "00"),
							end: new Date("2018", "05", "26", "21", "00"),
							title: "Gisho Prince",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "21", "00"),
							end: new Date("2018", "05", "27", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "01", "00"),
							end: new Date("2018", "05", "27", "09", "00"),
							title: "John Smith",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27","09","0"),
							end: new Date("2018", "05", "27","13","0"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27","13","0"),
							end: new Date("2018", "05", "27","17","0"),
							title: "Amrit Paul",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "17", "00"),
							end: new Date("2018", "05", "27", "21", "00"),
							title: "Gisho Prince",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "21", "00"),
							end: new Date("2018", "05", "28", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						}]
					},
					{
						name: "HCM",
						role: "",
						appointments: [{
							start: new Date("2018", "05", "25","01","0"),
							end: new Date("2018", "05", "25","09","0"),
							title: "John Smith",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25","09","0"),
							end: new Date("2018", "05", "25","13","0"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25","13","0"),
							end: new Date("2018", "05", "25","17","0"),
							title: "Amrit Paul",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25", "17", "00"),
							end: new Date("2018", "05", "25", "21", "00"),
							title: "Gisho Prince",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "25", "21", "00"),
							end: new Date("2018", "05", "26", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "01", "00"),
							end: new Date("2018", "05", "26", "09", "00"),
							title: "John Smith",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26","09","0"),
							end: new Date("2018", "05", "26","13","0"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26","13","0"),
							end: new Date("2018", "05", "26","17","0"),
							title: "Amrit Paul",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "17", "00"),
							end: new Date("2018", "05", "26", "21", "00"),
							title: "Gisho Prince",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "26", "21", "00"),
							end: new Date("2018", "05", "27", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "01", "00"),
							end: new Date("2018", "05", "27", "09", "00"),
							title: "John Smith",
							info: "",
							pic: pic,
							type: "Type04",
							tentative: false,
							Region: "APJ",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27","09","0"),
							end: new Date("2018", "05", "27","13","0"),
							title: "Muhammad Li",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27","13","0"),
							end: new Date("2018", "05", "27","17","0"),
							title: "Amrit Paul",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "EMEA",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "17", "00"),
							end: new Date("2018", "05", "27", "21", "00"),
							title: "Gisho Prince",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						},{
							start: new Date("2018", "05", "27", "21", "00"),
							end: new Date("2018", "05", "28", "01", "00"),
							title: "Jaemin White",
							info: "",
							type: "Type04",
							pic: pic,
							tentative: false,
							Region: "Americas",
							UserId:"I888888",
							UserEmail:"test@sap.com"
						}]
					}
				]
			
			}
			return data;
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf crm.torontoCRM.view.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf crm.torontoCRM.view.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf crm.torontoCRM.view.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});