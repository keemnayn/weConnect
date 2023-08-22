/*
 * App URI: member/FreeBoard
 * Source Location: member/FreeBoard.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("member/FreeBoard", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * board.js
			 * Created at 2023. 8. 8. 오후 3:41:40.
			 *
			 * @author chwec
			 ************************************************/

			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e) {
				app.lookup("boardListSub").send();
			}

			/*
			 * "새글" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e) {
				var button = e.control;
				//	window.location = "boardWriteFrom.do";
				app.openDialog("dialog/BoardWriteForm", {
					width: 1280,
					height: 720
				}, function(dialog) {
					//팝업이 닫히면 리스트를 다시 send해서 reload 해줌.
					dialog.addEventListener("close", function(e) {
						app.lookup("boardListSub").send();
					});
				});
			}

				
				//페이지 이동식
			//	var grid = app.lookup("boardListGrd");
			//	//	var value = grid.getSelectedRow().getValue("freeBoardId");
			//	var freeBoardId = grid.getSelectedRow().getValue("freeBoardId");
			//	console.log(freeBoardId);
			//	var dataMap = app.lookup("boardParam");
			//	dataMap.setValue("freeBoardId", freeBoardId);
			//	var submission = app.lookup("boardParamSub");
			//	submission.send();


			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onBoardParamSubSubmitSuccess(e) {
				var boardParamSub = e.control;
				var submission = app.lookup("boardParamSub");
			}

			/*
			 * 그리드에서 row-dblclick 이벤트 발생 시 호출.
			 * detail이 row를 더블클릭 한 경우 발생하는 이벤트.
			 */
			function onBoardListGrdRowDblclick(e){
				var boardListGrd = e.control;
				var grid = app.lookup("boardListGrd");
				var selectedRowIndices = grid.getSelectedRowIndices();
				if (selectedRowIndices.length == 1) {
					var freeBoardId = grid.dataSet.getValue(selectedRowIndices[0], "freeBoardId");
					var value = {
						"freeBoardId": freeBoardId
					}
				}
				//팝업 열기
				app.openDialog("dialog/BoardDetailPage", {width : 1580, height : 780}, function(dialog){
					dialog.ready(function(dialogApp){
						// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
						dialogApp.initValue = value;
					});
				}).then(function(returnValue){
					;
				});
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("boardList");
			dataSet_1.parseData({
				"columns": [
					{
						"name": "freeBoardId",
						"dataType": "number"
					},
					{
						"name": "freeBoardTitle",
						"dataType": "string"
					},
					{
						"name": "memberName",
						"dataType": "string"
					},
					{
						"name": "freeBoardCreate",
						"dataType": "string"
					}
				],
				"rows": []
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("search");
			dataSet_2.parseData({
				"columns": [{"name": "type"}],
				"rows": [
					{"type": "전체"},
					{"type": "내용"},
					{"type": "작성자"}
				]
			});
			app.register(dataSet_2);
			var dataMap_1 = new cpr.data.DataMap("boardParam");
			dataMap_1.parseData({
				"columns" : [{
					"name": "freeBoardId",
					"dataType": "number"
				}]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("boardListSub");
			submission_1.method = "get";
			submission_1.action = "/weconnect/member/boards";
			submission_1.addResponseData(dataSet_1, false);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("boardParamSub");
			submission_2.method = "get";
			submission_2.action = "member/boards/detail";
			submission_2.mediaType = "application/x-www-form-urlencoded;simple";
			submission_2.addRequestData(dataMap_1);
			if(typeof onBoardParamSubSubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onBoardParamSubSubmitSuccess);
			}
			app.register(submission_2);
			app.supportMedia("all and (min-width: 1920px)", "Project");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"line-height" : "0px",
				"font-size" : "30px",
				"width" : "100%",
				"height" : "100%",
				"font-weight" : "bold"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var grid_1 = new cpr.controls.Grid("boardListGrd");
			grid_1.init({
				"dataSet": app.lookup("boardList"),
				"columns": [
					{
						"width": "100px",
						"visible": false
					},
					{"width": "130px"},
					{"width": "20px"},
					{"width": "20px"}
				],
				"header": {
					"rows": [{"height": "50px"}],
					"cells": [
						{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "freeBoardId";
								cell.text = "freeBoardId";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "freeBoardTitle";
								cell.text = "제목";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "memberName";
								cell.text = "작성자";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "freeBoardCreate";
								cell.text = "작성일";
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
								cell.columnName = "freeBoardId";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.columnName = "freeBoardTitle";
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
								cell.columnName = "freeBoardCreate";
							}
						}
					]
				}
			});
			if(typeof onBoardListGrdRowDblclick == "function") {
				grid_1.addEventListener("row-dblclick", onBoardListGrdRowDblclick);
			}
			container.addChild(grid_1, {
				"top": "80px",
				"right": "0px",
				"bottom": "100px",
				"left": "0px"
			});
			
			var pageIndexer_1 = new cpr.controls.PageIndexer();
			pageIndexer_1.init(1, 1, 1);
			container.addChild(pageIndexer_1, {
				"bottom": "50px",
				"left": "290px",
				"width": "1000px",
				"height": "51px"
			});
			
			var group_1 = new cpr.controls.Container();
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var searchInput_1 = new cpr.controls.SearchInput();
				container.addChild(searchInput_1, {
					"top": "0px",
					"right": "0px",
					"width": "560px",
					"height": "30px"
				});
				var comboBox_1 = new cpr.controls.ComboBox("cmb1");
				comboBox_1.value = "전체";
				(function(comboBox_1){
					comboBox_1.setItemSet(app.lookup("search"), {
						"label": "type",
						"value": "type"
					});
				})(comboBox_1);
				container.addChild(comboBox_1, {
					"top": "0px",
					"right": "560px",
					"width": "100px",
					"height": "30px"
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "40px",
				"width": "660px",
				"height": "30px",
				"left": "calc(50% - 330px)"
			});
			
			var button_1 = new cpr.controls.Button();
			button_1.value = "새글";
			if(typeof onButtonClick == "function") {
				button_1.addEventListener("click", onButtonClick);
			}
			container.addChild(button_1, {
				"top": "40px",
				"left": "1130px",
				"width": "100px",
				"height": "30px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
		}
	});
	app.title = "FreeBoard";
	cpr.core.Platform.INSTANCE.register(app);
})();
