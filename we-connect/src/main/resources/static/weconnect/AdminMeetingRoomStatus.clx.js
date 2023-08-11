/*
 * App URI: AdminMeetingRoomStatus
 * Source Location: AdminMeetingRoomStatus.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("AdminMeetingRoomStatus", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * MeetingRoomReserv.js
			 * Created at 2023. 8. 8. 오후 8:11:24.
			 *
			 * @author chwec
			 ************************************************/;
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("room");
			dataSet_1.parseData({
				"columns": [{"name": "room"}],
				"rows": [
					{"room": "8층 대회의실"},
					{"room": "8층 소회의실"},
					{"room": "6층 소회의실"},
					{"room": "5층 대회의실"},
					{"room": "5층 소회의실"},
					{"room": "접견실"}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("time");
			dataSet_2.parseData({
				"columns": [{
					"name": "time",
					"dataType": "string"
				}],
				"rows": [
					{"time": "9:00"},
					{"time": "10:00"},
					{"time": "11:00"},
					{"time": "12:00"},
					{"time": "13:00"},
					{"time": "14:00"},
					{"time": "15:00"},
					{"time": "16:00"},
					{"time": "17:00"},
					{"time": "18:00"},
					{"time": "19:00"},
					{"time": "20:00"}
				]
			});
			app.register(dataSet_2);
			app.supportMedia("all and (min-width: 1920px)", "Project");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var tabFolder_1 = new cpr.controls.TabFolder();
			
			var tabItem_1 = (function(tabFolder){
				var tabItem_1 = new cpr.controls.TabItem();
				tabItem_1.text = "회의실예약";
				var group_1 = new cpr.controls.Container();
				group_1.style.css({
					"border-right-style" : "solid",
					"border-bottom-color" : "#bfbfbf",
					"border-left-style" : "solid",
					"border-left-color" : "#bfbfbf",
					"border-top-color" : "#bfbfbf",
					"border-bottom-style" : "solid",
					"border-right-color" : "#bfbfbf",
					"border-top-style" : "solid"
				});
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_1.setLayout(xYLayout_2);
				(function(container){
					var group_2 = new cpr.controls.Container();
					group_2.style.css({
						"border-right-style" : "solid",
						"border-bottom-color" : "#bfbfbf",
						"border-bottom-style" : "solid",
						"border-right-color" : "#bfbfbf"
					});
					var formLayout_1 = new cpr.controls.layouts.FormLayout();
					formLayout_1.scrollable = false;
					formLayout_1.topMargin = "5px";
					formLayout_1.rightMargin = "5px";
					formLayout_1.bottomMargin = "5px";
					formLayout_1.leftMargin = "5px";
					formLayout_1.horizontalSpacing = "10px";
					formLayout_1.verticalSpacing = "10px";
					formLayout_1.setColumns(["280px"]);
					formLayout_1.setRows(["100px", "100px", "100px", "300px"]);
					group_2.setLayout(formLayout_1);
					(function(container){
						var output_1 = new cpr.controls.Output();
						output_1.value = "회의실";
						output_1.style.css({
							"border-bottom-color" : "#bfbfbf",
							"border-left-color" : "#bfbfbf",
							"border-top-color" : "#bfbfbf",
							"border-bottom-style" : "solid",
							"border-right-color" : "#bfbfbf",
							"text-align" : "center"
						});
						container.addChild(output_1, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var output_2 = new cpr.controls.Output();
						output_2.value = "시작 날짜";
						output_2.style.css({
							"border-bottom-color" : "#bfbfbf",
							"border-bottom-style" : "solid",
							"text-align" : "center"
						});
						container.addChild(output_2, {
							"colIndex": 0,
							"rowIndex": 1
						});
						var output_3 = new cpr.controls.Output();
						output_3.value = "종료 날짜";
						output_3.style.css({
							"border-bottom-color" : "#bfbfbf",
							"border-bottom-style" : "solid",
							"text-align" : "center"
						});
						container.addChild(output_3, {
							"colIndex": 0,
							"rowIndex": 2
						});
						var output_4 = new cpr.controls.Output();
						output_4.value = "목적";
						output_4.style.css({
							"border-bottom-color" : "#bfbfbf",
							"border-bottom-style" : "solid",
							"text-align" : "center"
						});
						container.addChild(output_4, {
							"colIndex": 0,
							"rowIndex": 3
						});
					})(group_2);
					container.addChild(group_2, {
						"top": "0px",
						"bottom": "156px",
						"left": "0px",
						"width": "280px"
					});
					var group_3 = new cpr.controls.Container();
					group_3.style.css({
						"border-bottom-color" : "#bfbfbf",
						"border-left-color" : "#bfbfbf",
						"border-bottom-style" : "solid"
					});
					var formLayout_2 = new cpr.controls.layouts.FormLayout();
					formLayout_2.scrollable = false;
					formLayout_2.topMargin = "0px";
					formLayout_2.rightMargin = "0px";
					formLayout_2.bottomMargin = "0px";
					formLayout_2.leftMargin = "0px";
					formLayout_2.horizontalSpacing = "0px";
					formLayout_2.verticalSpacing = "0px";
					formLayout_2.setColumns(["1fr", "1fr", "1fr", "1fr"]);
					formLayout_2.setRows(["105px", "107px", "110px", "300px"]);
					group_3.setLayout(formLayout_2);
					(function(container){
						var comboBox_1 = new cpr.controls.ComboBox("cmb1");
						comboBox_1.style.css({
							"border-bottom-color" : "#bfbfbf",
							"font-weight" : "700",
							"font-size" : "17px",
							"border-bottom-style" : "solid",
							"text-align" : "center"
						});
						(function(comboBox_1){
							comboBox_1.setItemSet(app.lookup("room"), {
								"label": "room",
								"value": "room"
							});
						})(comboBox_1);
						container.addChild(comboBox_1, {
							"colIndex": 0,
							"rowIndex": 0,
							"colSpan": 4,
							"rowSpan": 1
						});
						var dateInput_1 = new cpr.controls.DateInput("dti2");
						dateInput_1.style.css({
							"border-right-style" : "solid",
							"border-left-style" : "solid",
							"border-bottom-style" : "solid",
							"border-top-style" : "solid",
							"text-align" : "center"
						});
						container.addChild(dateInput_1, {
							"colIndex": 0,
							"rowIndex": 1,
							"colSpan": 2,
							"rowSpan": 1
						});
						var output_5 = new cpr.controls.Output();
						output_5.value = "시작 시간";
						output_5.style.css({
							"border-bottom-color" : "#bfbfbf",
							"border-top-color" : "#bfbfbf",
							"border-bottom-style" : "solid",
							"border-top-style" : "solid",
							"text-align" : "center"
						});
						container.addChild(output_5, {
							"colIndex": 2,
							"rowIndex": 1
						});
						var comboBox_2 = new cpr.controls.ComboBox("cmb2");
						comboBox_2.style.css({
							"text-align" : "center"
						});
						(function(comboBox_2){
							comboBox_2.setItemSet(app.lookup("time"), {
								"label": "time",
								"value": "time"
							});
						})(comboBox_2);
						container.addChild(comboBox_2, {
							"colIndex": 3,
							"rowIndex": 1
						});
						var dateInput_2 = new cpr.controls.DateInput("dti1");
						dateInput_2.style.css({
							"text-align" : "center"
						});
						container.addChild(dateInput_2, {
							"colIndex": 0,
							"rowIndex": 2,
							"colSpan": 2,
							"rowSpan": 1,
							"height": 0
						});
						var output_6 = new cpr.controls.Output();
						output_6.value = "종료 시간";
						output_6.style.css({
							"border-bottom-color" : "#bfbfbf",
							"border-bottom-style" : "solid",
							"text-align" : "center"
						});
						container.addChild(output_6, {
							"colIndex": 2,
							"rowIndex": 2
						});
						var comboBox_3 = new cpr.controls.ComboBox("cmb3");
						comboBox_3.style.css({
							"text-align" : "center"
						});
						(function(comboBox_3){
							comboBox_3.setItemSet(app.lookup("time"), {
								"label": "time",
								"value": "time"
							});
						})(comboBox_3);
						container.addChild(comboBox_3, {
							"colIndex": 3,
							"rowIndex": 2
						});
						var inputBox_1 = new cpr.controls.InputBox("ipb1");
						container.addChild(inputBox_1, {
							"colIndex": 0,
							"rowIndex": 3,
							"colSpan": 4,
							"rowSpan": 1
						});
					})(group_3);
					container.addChild(group_3, {
						"top": "0px",
						"right": "0px",
						"bottom": "156px",
						"width": "1292px"
					});
					var button_1 = new cpr.controls.Button();
					button_1.value = "신청";
					button_1.style.css({
						"background-color" : "#FEEDED"
					});
					container.addChild(button_1, {
						"top": "659px",
						"left": "666px",
						"width": "100px",
						"height": "50px"
					});
					var button_2 = new cpr.controls.Button();
					button_2.value = "취소";
					button_2.style.css({
						"background-color" : "#BFBFBF"
					});
					container.addChild(button_2, {
						"top": "659px",
						"left": "826px",
						"width": "100px",
						"height": "50px"
					});
				})(group_1);
				tabItem_1.content = group_1;
				return tabItem_1;
			})(tabFolder_1);
			tabFolder_1.addTabItem(tabItem_1);
			tabFolder_1.setSelectedTabItem(tabItem_1);
			container.addChild(tabFolder_1, {
				"top": "0px",
				"right": "0px",
				"bottom": "0px",
				"left": "0px"
			});
		}
	});
	app.title = "AdminMeetingRoomStatus";
	cpr.core.Platform.INSTANCE.register(app);
})();
