/*
 * App URI: admin/AdminRoomReserv
 * Source Location: admin/AdminRoomReserv.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("admin/AdminRoomReserv", { 
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
			 ************************************************/
			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e) {
				app.lookup("reservListSub").send();
				app.lookup("roomListSub").send();
			}

			/*
			 * "등록" 버튼(addRoomBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onAddRoomBtnClick2(e) {
				var addRoomBtn = e.control;
				var button = e.control;
				app.openDialog("dialog/RoomCreate", {
					width: 550,
					height: 350
				}, function(dialog) {
					dialog.addEventListener("close", function(e) {
						app.lookup("roomListSub").send();
					});
				});
			}

			/*
			 * "삭제" 버튼(deleteBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onDeleteBtnClick(e) {
				var deleteBtn = e.control;
				var grid = app.lookup("roomGrd");
				var checkRowIndices = grid.getCheckRowIndices();
				if (checkRowIndices.length > 0) {
					if (confirm("선택한 회의실을 삭제 하시겠습니까?")) {
						grid.deleteRow(checkRowIndices);
						app.lookup("deleteRoomSub").send();
					}
				} else {
					alert("회의실을 선택해주세요");
				}
			}

			/*
			 * 서브미션에서 submit-done 이벤트 발생 시 호출.
			 * 응답처리가 모두 종료되면 발생합니다.
			 */
			function onDeleteRoomSubSubmitDone(e) {
				var deleteRoomSub = e.control;
				app.lookup("roomListSub").send();
				app.lookup("reservListSub").send();
			}
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("reservList");
			dataSet_1.parseData({
				"stateRestore": false,
				"columns": [
					{
						"name": "roomReservId",
						"dataType": "number",
						"displayOnly": false
					},
					{"name": "roomName"},
					{"name": "memberName"},
					{"name": "proposal"},
					{"name": "roomReservDate"},
					{
						"name": "roomReservStartTime",
						"dataType": "number"
					},
					{
						"name": "roomReservEndTime",
						"dataType": "number"
					}
				],
				"rows": [
					{"roomReservId": "1"},
					{"roomReservId": "2"}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("roomList");
			dataSet_2.parseData({
				"columns" : [
					{
						"name": "roomId",
						"dataType": "number"
					},
					{"name": "roomName"}
				]
			});
			app.register(dataSet_2);
			var submission_1 = new cpr.protocols.Submission("reservListSub");
			submission_1.method = "get";
			submission_1.action = "admin/room-reserv";
			submission_1.addResponseData(dataSet_1, false);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("roomListSub");
			submission_2.method = "get";
			submission_2.action = "admin/room-reserv/room";
			submission_2.addResponseData(dataSet_2, false);
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("deleteRoomSub");
			submission_3.method = "delete";
			submission_3.action = "admin/room-reserv";
			submission_3.addRequestData(dataSet_2);
			if(typeof onDeleteRoomSubSubmitDone == "function") {
				submission_3.addEventListener("submit-done", onDeleteRoomSubSubmitDone);
			}
			app.register(submission_3);
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
				tabItem_1.text = "회의실 목록";
				var group_1 = new cpr.controls.Container();
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_1.setLayout(xYLayout_2);
				(function(container){
					var grid_1 = new cpr.controls.Grid("roomGrd");
					grid_1.init({
						"dataSet": app.lookup("roomList"),
						"columns": [
							{"width": "25px"},
							{
								"width": "20px",
								"visible": false
							},
							{"width": "500px"}
						],
						"header": {
							"rows": [{"height": "50px"}],
							"cells": [
								{
									"constraint": {"rowIndex": 0, "colIndex": 0},
									"configurator": function(cell){
										cell.columnType = "checkbox";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "roomId";
										cell.text = "번호";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "roomName";
										cell.text = "회의실명";
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
										cell.columnType = "checkbox";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.columnName = "roomId";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.columnName = "roomName";
									}
								}
							]
						}
					});
					grid_1.style.header.css({
						"font-weight" : "800",
						"background-image" : "none"
					});
					container.addChild(grid_1, {
						"top": "55px",
						"right": "0px",
						"bottom": "0px",
						"left": "0px"
					});
					var group_2 = new cpr.controls.Container();
					var formLayout_1 = new cpr.controls.layouts.FormLayout();
					formLayout_1.scrollable = false;
					formLayout_1.topMargin = "5px";
					formLayout_1.rightMargin = "5px";
					formLayout_1.bottomMargin = "5px";
					formLayout_1.leftMargin = "5px";
					formLayout_1.horizontalSpacing = "10px";
					formLayout_1.verticalSpacing = "10px";
					formLayout_1.setColumns(["1fr", "1fr"]);
					formLayout_1.setRows(["1fr"]);
					group_2.setLayout(formLayout_1);
					(function(container){
						var button_1 = new cpr.controls.Button("deleteBtn");
						button_1.value = "삭제";
						if(typeof onDeleteBtnClick == "function") {
							button_1.addEventListener("click", onDeleteBtnClick);
						}
						container.addChild(button_1, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var button_2 = new cpr.controls.Button("addRoomBtn");
						button_2.value = "등록";
						if(typeof onAddRoomBtnClick2 == "function") {
							button_2.addEventListener("click", onAddRoomBtnClick2);
						}
						container.addChild(button_2, {
							"colIndex": 0,
							"rowIndex": 0
						});
					})(group_2);
					container.addChild(group_2, {
						"top": "5px",
						"right": "0px",
						"width": "133px",
						"height": "40px"
					});
				})(group_1);
				tabItem_1.content = group_1;
				return tabItem_1;
			})(tabFolder_1);
			tabFolder_1.addTabItem(tabItem_1);
			
			var tabItem_2 = (function(tabFolder){
				var tabItem_2 = new cpr.controls.TabItem();
				tabItem_2.text = "예약 현황";
				var group_3 = new cpr.controls.Container();
				var xYLayout_3 = new cpr.controls.layouts.XYLayout();
				group_3.setLayout(xYLayout_3);
				(function(container){
					var grid_2 = new cpr.controls.Grid("grd1");
					grid_2.init({
						"dataSet": app.lookup("reservList"),
						"columns": [
							{
								"width": "100px",
								"visible": false
							},
							{"width": "125px"},
							{"width": "75px"},
							{"width": "150px"},
							{"width": "100px"},
							{"width": "50px"},
							{"width": "50px"}
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
										cell.targetColumnName = "proposal";
										cell.text = "목적";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "roomReservDate";
										cell.text = "예약일자";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 5},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "roomReservStartTime";
										cell.text = "시작시간";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 6},
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
										cell.columnName = "proposal";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.columnName = "roomReservDate";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 5},
									"configurator": function(cell){
										cell.columnName = "roomReservStartTime";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 6},
									"configurator": function(cell){
										cell.columnName = "roomReservEndTime";
									}
								}
							]
						}
					});
					grid_2.style.header.css({
						"font-weight" : "800",
						"background-image" : "none"
					});
					if(typeof onGrd1SelectionChange == "function") {
						grid_2.addEventListener("selection-change", onGrd1SelectionChange);
					}
					container.addChild(grid_2, {
						"top": "55px",
						"right": "0px",
						"bottom": "0px",
						"left": "0px"
					});
				})(group_3);
				tabItem_2.content = group_3;
				return tabItem_2;
			})(tabFolder_1);
			tabFolder_1.addTabItem(tabItem_2);
			tabFolder_1.setSelectedTabItem(tabItem_2);
			container.addChild(tabFolder_1, {
				"top": "0px",
				"right": "0px",
				"bottom": "0px",
				"left": "0px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
		}
	});
	app.title = "AdminRoomReserv";
	cpr.core.Platform.INSTANCE.register(app);
})();
