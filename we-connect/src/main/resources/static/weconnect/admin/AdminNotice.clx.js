/*
 * App URI: admin/AdminNotice
 * Source Location: admin/AdminNotice.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("admin/AdminNotice", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * adminNotice.js
			 * Created at 2023. 8. 9. 오전 10:03:48.
			 *
			 * @author Axl Rose
			 ************************************************/

			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e) {
				app.lookup("noticeListSub").send();
				var comboBox = app.lookup("searchTypeCmb");
				comboBox.fieldLabel = "전체";
				comboBox.value = "all";
			}

			/*
			 * "등록" 버튼(createBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onCreateBtnClick(e) {
				var createBtn = e.control;
				var grid = app.lookup("noticeGrd");
				app.openDialog("dialog/NoticeCreate", {
					width: 1280,
					height: 720
				}, function(dialog) {
					dialog.addEventListener("close", function(e) {
						app.lookup("noticeListSub").send();
					});
				});
			}
			/*
			 * 서치 인풋에서 search 이벤트 발생 시 호출.
			 * Searchinput의 enter키 또는 검색버튼을 클릭하여 인풋의 값이 Search될때 발생하는 이벤트
			 */
			function onSearchIpbSearch(e) {
				var searchIpb = e.control;
				var submission = app.lookup("searchNoticeSub");
				submission.send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSearchNoticeSubSubmitSuccess(e) {
				var searchNoticeSub = e.control;
				app.lookup("noticeGrd").redraw();
				
			}

			/*
			 * "삭제" 버튼(deleteBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onDeleteBtnClick(e) {
				var deleteBtn = e.control;
				var grid = app.lookup("noticeGrd");
				var checkRowIndices = grid.getCheckRowIndices();
				if (checkRowIndices.length > 0) {
					grid.deleteRow(checkRowIndices);
					app.lookup("deleteNoticeSub").send();
				}
			}
			/*
			 * 서브미션에서 submit-done 이벤트 발생 시 호출.
			 * 응답처리가 모두 종료되면 발생합니다.
			 */
			function onDeleteNoticeSubSubmitDone(e) {
				var deleteNoticeSub = e.control;
				app.lookup("noticeListSub").send();
			}

			/*
			 * "수정" 버튼(updateBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onUpdateBtnClick(e) {
				var updateBtn = e.control;
				var grid = app.lookup("noticeGrd");
				var checkRowIndices = grid.getCheckRowIndices();
				var noticeId = grid.dataSet.getValue(checkRowIndices[0], "noticeId");
				var noticeTitle = grid.dataSet.getValue(checkRowIndices[0], "noticeTitle");
				var noticeContent = grid.dataSet.getValue(checkRowIndices[0], "noticeContent");
				var noticeCategory = grid.dataSet.getValue(checkRowIndices[0], "noticeCategory");
				var value = [noticeId, noticeTitle, noticeContent, noticeCategory];
				console.log(value);
				app.openDialog("dialog/NoticeUpdate", {
					width: 1280,
					height: 720
				}, function(dialog) {
					dialog.ready(function(dialogApp) {
						dialogApp.initValue = value;
					});
				}).then(function(returnValue) {
					;
				});
			}
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("noticeList");
			dataSet_1.parseData({
				"columns": [
					{
						"name": "noticeId",
						"dataType": "string"
					},
					{"name": "noticeTitle"},
					{"name": "noticeContent"},
					{"name": "noticeCategory"},
					{"name": "noticeCreate"}
				],
				"rows": []
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("noticeSearch");
			dataSet_2.parseData({
				"columns": [
					{"name": "type"},
					{"name": "value"}
				],
				"rows": [
					{"type": "전체", "value": "all"},
					{"type": "제목", "value": "title"},
					{"type": "분류", "value": "category"}
				]
			});
			app.register(dataSet_2);
			var dataMap_1 = new cpr.data.DataMap("searchParam");
			dataMap_1.parseData({
				"columns" : [
					{"name": "searchType"},
					{"name": "searchText"}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("noticeListSub");
			submission_1.method = "get";
			submission_1.action = "admin/notices";
			submission_1.addResponseData(dataSet_1, false);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("searchNoticeSub");
			submission_2.method = "get";
			submission_2.action = "admin/notices/search";
			submission_2.addRequestData(dataMap_1);
			submission_2.addResponseData(dataSet_1, false);
			if(typeof onSearchNoticeSubSubmitDone == "function") {
				submission_2.addEventListener("submit-done", onSearchNoticeSubSubmitDone);
			}
			if(typeof onSearchNoticeSubSubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onSearchNoticeSubSubmitSuccess);
			}
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("deleteNoticeSub");
			submission_3.method = "delete";
			submission_3.action = "admin/notices";
			submission_3.addRequestData(dataSet_1);
			if(typeof onDeleteNoticeSubSubmitSuccess == "function") {
				submission_3.addEventListener("submit-success", onDeleteNoticeSubSubmitSuccess);
			}
			if(typeof onDeleteNoticeSubSubmitDone == "function") {
				submission_3.addEventListener("submit-done", onDeleteNoticeSubSubmitDone);
			}
			app.register(submission_3);
			app.supportMedia("all and (min-width: 1920px)", "new-screen");
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
				tabItem_1.text = "공지관리";
				var group_1 = new cpr.controls.Container();
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_1.setLayout(xYLayout_2);
				(function(container){
					var grid_1 = new cpr.controls.Grid("noticeGrd");
					grid_1.init({
						"dataSet": app.lookup("noticeList"),
						"columns": [
							{"width": "25px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"}
						],
						"header": {
							"rows": [{"height": "24px"}],
							"cells": [
								{
									"constraint": {"rowIndex": 0, "colIndex": 0},
									"configurator": function(cell){
										cell.columnType = "checkbox";
										cell.filterable = false;
										cell.sortable = false;
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "noticeId";
										cell.text = "noticeId";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "noticeTitle";
										cell.text = "noticeTitle";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 3},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "noticeContent";
										cell.text = "noticeContent";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "noticeCategory";
										cell.text = "noticeCategory";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 5},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "noticeCreate";
										cell.text = "noticeCreate";
									}
								}
							]
						},
						"detail": {
							"rows": [{"height": "24px"}],
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
										cell.columnName = "noticeId";
										cell.control = (function(){
											var output_1 = new cpr.controls.Output();
											output_1.bind("value").toDataColumn("noticeId");
											return output_1;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.columnName = "noticeTitle";
										cell.control = (function(){
											var output_2 = new cpr.controls.Output();
											output_2.bind("value").toDataColumn("noticeTitle");
											return output_2;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 3},
									"configurator": function(cell){
										cell.columnName = "noticeContent";
										cell.control = (function(){
											var output_3 = new cpr.controls.Output();
											output_3.bind("value").toDataColumn("noticeContent");
											return output_3;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.columnName = "noticeCategory";
										cell.control = (function(){
											var output_4 = new cpr.controls.Output();
											output_4.bind("value").toDataColumn("noticeCategory");
											return output_4;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 5},
									"configurator": function(cell){
										cell.columnName = "noticeCreate";
										cell.control = (function(){
											var output_5 = new cpr.controls.Output();
											output_5.bind("value").toDataColumn("noticeCreate");
											return output_5;
										})();
									}
								}
							]
						}
					});
					grid_1.style.header.setClasses(["Notice_grd1"]);
					container.addChild(grid_1, {
						"top": "50px",
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
					formLayout_1.setColumns(["1fr", "1fr", "1fr"]);
					formLayout_1.setRows(["1fr"]);
					group_2.setLayout(formLayout_1);
					(function(container){
						var button_1 = new cpr.controls.Button("createBtn");
						button_1.value = "등록";
						if(typeof onCreateBtnClick == "function") {
							button_1.addEventListener("click", onCreateBtnClick);
						}
						container.addChild(button_1, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var button_2 = new cpr.controls.Button("updateBtn");
						button_2.value = "수정";
						if(typeof onUpdateBtnClick == "function") {
							button_2.addEventListener("click", onUpdateBtnClick);
						}
						container.addChild(button_2, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var button_3 = new cpr.controls.Button("deleteBtn");
						button_3.value = "삭제";
						if(typeof onDeleteBtnClick == "function") {
							button_3.addEventListener("click", onDeleteBtnClick);
						}
						container.addChild(button_3, {
							"colIndex": 2,
							"rowIndex": 0
						});
					})(group_2);
					container.addChild(group_2, {
						"top": "5px",
						"right": "0px",
						"width": "225px",
						"height": "40px"
					});
					var comboBox_1 = new cpr.controls.ComboBox("searchTypeCmb");
					comboBox_1.style.css({
						"text-align" : "center"
					});
					var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("searchParam"));
					comboBox_1.setBindContext(dataMapContext_1);
					comboBox_1.bind("value").toDataMap(app.lookup("searchParam"), "searchType");
					(function(comboBox_1){
						comboBox_1.setItemSet(app.lookup("noticeSearch"), {
							"label": "type",
							"value": "value"
						});
					})(comboBox_1);
					container.addChild(comboBox_1, {
						"top": "10px",
						"right": "545px",
						"width": "100px",
						"height": "30px"
					});
					var searchInput_1 = new cpr.controls.SearchInput("searchIpb");
					var dataMapContext_2 = new cpr.bind.DataMapContext(app.lookup("searchParam"));
					searchInput_1.setBindContext(dataMapContext_2);
					searchInput_1.bind("value").toDataMap(app.lookup("searchParam"), "searchText");
					if(typeof onSearchIpbSearch == "function") {
						searchInput_1.addEventListener("search", onSearchIpbSearch);
					}
					container.addChild(searchInput_1, {
						"top": "10px",
						"right": "245px",
						"width": "280px",
						"height": "30px"
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
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
		}
	});
	app.title = "AdminNotice";
	cpr.core.Platform.INSTANCE.register(app);
})();
