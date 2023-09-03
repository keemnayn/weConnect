/*
 * App URI: member/RoomReservList
 * Source Location: member/RoomReservList.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("member/RoomReservList", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * RoomReservList.js
			 * Created at 2023. 8. 18. 오전 9:55:53.
			 *
			 * @author chwec
			 ************************************************/

			/*
			 * "예약" 버튼(newReserv)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onNewReservClick(e){
				var newReserv = e.control;
				app.openDialog("dialog/RoomReserv", {width : 640, height : 480}, function(dialog){
					dialog.addEventListener("close", function(e){
						app.lookup("reservListSub").send();
					});
				});
			}

			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e){
				app.lookup("reservListSub").send();
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("reservList");
			dataSet_1.parseData({
				"columns" : [
					{
						"name": "roomReservId",
						"dataType": "number"
					},
					{"name": "roomName"},
					{"name": "memberName"},
					{"name": "roomReservDate"},
					{
						"name": "roomReservStartTime",
						"dataType": "number"
					},
					{
						"name": "roomReservEndTime",
						"dataType": "number"
					}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("search");
			dataSet_2.parseData({
				"columns": [
					{"name": "type"},
					{"name": "value"}
				],
				"rows": [
					{"type": "회의실", "value": "roomName"},
					{"type": "예약자", "value": "memberName"}
				]
			});
			app.register(dataSet_2);
			var submission_1 = new cpr.protocols.Submission("reservListSub");
			submission_1.method = "get";
			submission_1.action = "/weconnect/member/room-reserv/list";
			submission_1.addResponseData(dataSet_1, false);
			app.register(submission_1);
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
			var grid_1 = new cpr.controls.Grid("grd1");
			grid_1.init({
				"dataSet": app.lookup("reservList"),
				"columns": [
					{
						"width": "100px",
						"visible": false
					},
					{"width": "100px"},
					{"width": "100px"},
					{"width": "100px"},
					{"width": "100px"},
					{"width": "100px"}
				],
				"header": {
					"rows": [{"height": "50px"}],
					"cells": [
						{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "roomReservId";
								cell.text = "번호";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "roomName";
								cell.text = "회의실";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "memberName";
								cell.text = "예약자";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "roomReservDate";
								cell.text = "예약일자";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "roomReservStartTime";
								cell.text = "시작시간";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 5},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "roomReservEndTime";
								cell.text = "예약시간";
							}
						}
					]
				},
				"detail": {
					"rows": [{"height": "50px"}],
					"cells": [
						{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.columnName = "roomReservId";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.columnName = "roomName";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.columnName = "memberName";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.columnName = "roomReservDate";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.columnName = "roomReservStartTime";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 5},
							"configurator": function(cell){
								cell.columnName = "roomReservEndTime";
							}
						}
					]
				}
			});
			container.addChild(grid_1, {
				"top": "50px",
				"bottom": "130px",
				"left": "0px",
				"width": "1580px"
			});
			
			var button_1 = new cpr.controls.Button("newReserv");
			button_1.value = "예약";
			if(typeof onNewReservClick == "function") {
				button_1.addEventListener("click", onNewReservClick);
			}
			container.addChild(button_1, {
				"top": "10px",
				"right": "1px",
				"width": "100px",
				"height": "30px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
		}
	});
	app.title = "RoomReservList";
	cpr.core.Platform.INSTANCE.register(app);
})();
