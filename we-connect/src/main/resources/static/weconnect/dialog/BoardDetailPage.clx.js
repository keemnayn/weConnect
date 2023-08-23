/*
 * App URI: dialog/BoardDetailPage
 * Source Location: dialog/BoardDetailPage.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("dialog/BoardDetailPage", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * BoardDetailPage.js
			 * Created at 2023. 8. 22. 오전 10:17:30.
			 *
			 * @author chwec
			 ************************************************/

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e){
				var hostProperty = app.getHostProperty("initValue");
				var freeBoardId = hostProperty["freeBoardId"];
				app.lookup("freeBoardId").value = freeBoardId;
				app.lookup("boardDetailSub").send();

			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onBoardDetailSubSubmitSuccess(e){
				var boardDetailSub = e.control;
				app.lookup("freeBoardTitle").redraw();
				app.lookup("freeBoardContent").redraw();
				app.lookup("memberName").redraw();
				app.lookup("freeBoardViews").redraw();
				app.lookup("freeBoardCreate").redraw();
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("freeBoardComment");
			dataSet_1.parseData({
				"columns" : [
					{
						"name": "freeBoardCommentId",
						"dataType": "number"
					},
					{"name": "memberName"},
					{"name": "freeBoardCommentContent"},
					{"name": "freeBoardCommentDate"},
					{
						"name": "freeBoardId",
						"dataType": "number"
					}
				]
			});
			app.register(dataSet_1);
			var dataMap_1 = new cpr.data.DataMap("detailBoardParam");
			dataMap_1.parseData({
				"columns" : [{
					"name": "freeBoardId",
					"dataType": "number"
				}]
			});
			app.register(dataMap_1);
			
			var dataMap_2 = new cpr.data.DataMap("freeBoardDetail");
			dataMap_2.parseData({
				"columns" : [
					{
						"name": "freeBoardId",
						"dataType": "number"
					},
					{"name": "freeBoardTitle"},
					{"name": "freeBoardContent"},
					{
						"name": "freeBoardViews",
						"dataType": "number"
					},
					{"name": "memberName"},
					{"name": "freeBoardFileName"},
					{"name": "freeBoardCreate"}
				]
			});
			app.register(dataMap_2);
			var submission_1 = new cpr.protocols.Submission("boardDetailSub");
			submission_1.method = "get";
			submission_1.action = "member/boards/detail";
			submission_1.addRequestData(dataMap_1);
			submission_1.addResponseData(dataMap_2, false);
			submission_1.addResponseData(dataSet_1, false);
			if(typeof onBoardDetailSubSubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onBoardDetailSubSubmitSuccess);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("boardParamSub");
			submission_2.action = "member/boards";
			submission_2.addRequestData(dataMap_1);
			app.register(submission_2);
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
			container.bind("readOnly").toDataMap(app.lookup("freeBoardDetail"), "memberName");
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var output_1 = new cpr.controls.Output("freeBoardTitle");
			output_1.bind("value").toDataMap(app.lookup("freeBoardDetail"), "freeBoardTitle");
			container.addChild(output_1, {
				"top": "0px",
				"right": "10px",
				"left": "10px",
				"height": "30px"
			});
			
			var output_2 = new cpr.controls.Output("freeBoardContent");
			output_2.bind("value").toDataMap(app.lookup("freeBoardDetail"), "freeBoardContent");
			container.addChild(output_2, {
				"top": "80px",
				"right": "10px",
				"left": "10px",
				"height": "350px"
			});
			
			var inputBox_1 = new cpr.controls.InputBox("commentIpb");
			inputBox_1.placeholder = "댓글을 입력해주세요.";
			container.addChild(inputBox_1, {
				"top": "440px",
				"right": "110px",
				"left": "10px",
				"height": "70px"
			});
			
			var button_1 = new cpr.controls.Button("commentBtn");
			button_1.value = "등록";
			container.addChild(button_1, {
				"top": "440px",
				"right": "10px",
				"width": "100px",
				"height": "70px"
			});
			
			var grid_1 = new cpr.controls.Grid("commentGrd");
			grid_1.init({
				"dataSet": app.lookup("freeBoardComment"),
				"columns": [
					{
						"width": "100px",
						"visible": false
					},
					{"width": "20px"},
					{"width": "150px"},
					{"width": "20px"},
					{"width": "10px"},
					{"width": "10px"}
				],
				"header": {
					"rows": [{"height": "24px"}],
					"cells": [
						{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "freeBoardCommentId";
								cell.text = "번호";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "memberName";
								cell.text = "작성자";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "freeBoardCommentContent";
								cell.text = "내용";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "freeBoardCommentDate";
								cell.text = "작성일";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 5},
							"configurator": function(cell){
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
								cell.columnName = "freeBoardCommentId";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.columnName = "memberName";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.columnName = "freeBoardCommentContent";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.columnName = "freeBoardCommentDate";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.control = (function(){
									var button_2 = new cpr.controls.Button();
									button_2.value = "수정";
									return button_2;
								})();
								cell.controlConstraint = {};
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 5},
							"configurator": function(cell){
								cell.control = (function(){
									var button_3 = new cpr.controls.Button();
									button_3.value = "삭제";
									return button_3;
								})();
								cell.controlConstraint = {};
							}
						}
					]
				}
			});
			container.addChild(grid_1, {
				"top": "520px",
				"right": "10px",
				"bottom": "10px",
				"left": "10px"
			});
			
			var group_1 = new cpr.controls.Container();
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "0px";
			formLayout_1.rightMargin = "0px";
			formLayout_1.bottomMargin = "0px";
			formLayout_1.leftMargin = "0px";
			formLayout_1.horizontalSpacing = "0px";
			formLayout_1.verticalSpacing = "0px";
			formLayout_1.setColumns(["100px", "100px", "1fr", "100px", "1fr", "100px", "1fr"]);
			formLayout_1.setRows(["1fr"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var output_3 = new cpr.controls.Output();
				output_3.value = "작성자";
				container.addChild(output_3, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var output_4 = new cpr.controls.Output("memberName");
				output_4.bind("value").toDataMap(app.lookup("freeBoardDetail"), "memberName");
				container.addChild(output_4, {
					"colIndex": 2,
					"rowIndex": 0
				});
				var output_5 = new cpr.controls.Output();
				output_5.value = "작성일";
				container.addChild(output_5, {
					"colIndex": 3,
					"rowIndex": 0
				});
				var output_6 = new cpr.controls.Output("freeBoardCreate");
				output_6.bind("value").toDataMap(app.lookup("freeBoardDetail"), "freeBoardCreate");
				container.addChild(output_6, {
					"colIndex": 4,
					"rowIndex": 0
				});
				var output_7 = new cpr.controls.Output();
				output_7.value = "조회수";
				container.addChild(output_7, {
					"colIndex": 5,
					"rowIndex": 0
				});
				var output_8 = new cpr.controls.Output("freeBoardViews");
				output_8.bind("value").toDataMap(app.lookup("freeBoardDetail"), "freeBoardViews");
				container.addChild(output_8, {
					"colIndex": 6,
					"rowIndex": 0
				});
				var output_9 = new cpr.controls.Output("freeBoardId");
				var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("detailBoardParam"));
				output_9.setBindContext(dataMapContext_1);
				output_9.bind("value").toDataMap(app.lookup("detailBoardParam"), "freeBoardId");
				container.addChild(output_9, {
					"colIndex": 0,
					"rowIndex": 0
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "40px",
				"right": "10px",
				"left": "10px",
				"height": "30px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "상세 페이지";
	cpr.core.Platform.INSTANCE.register(app);
})();