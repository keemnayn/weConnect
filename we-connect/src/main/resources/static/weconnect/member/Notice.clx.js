/*
 * App URI: member/Notice
 * Source Location: member/Notice.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("member/Notice", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * notice.js
			 * Created at 2023. 8. 5. 오후 7:26:53.
			 *
			 * @author Axl Rose
			 ************************************************/

			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e){
				app.lookup("noticeListSub").send();
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("noticeList");
			dataSet_1.parseData({
				"columns": [
					{
						"name": "noticeId",
						"dataType": "number"
					},
					{"name": "noticeCategory"},
					{"name": "noticeTitle"},
					{"name": "noticeContent"},
					{"name": "noticeCreate"}
				],
				"rows": [
					{"noticeContent": "공지할게요", "noticeCategory": "점검"},
					{"noticeContent": "공지할게요", "noticeCategory": "공지"},
					{"noticeContent": "공지할게요", "noticeCategory": "점검"},
					{"noticeContent": "공지할게요", "noticeCategory": "점검"},
					{"noticeContent": "공지할게요", "noticeCategory": "공지"}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("search");
			dataSet_2.parseData({
				"columns": [{"name": "type"}],
				"rows": [
					{"type": "전체"},
					{"type": "공지"},
					{"type": "점검"}
				]
			});
			app.register(dataSet_2);
			var submission_1 = new cpr.protocols.Submission("noticeListSub");
			submission_1.method = "get";
			submission_1.action = "member/notice";
			submission_1.addResponseData(dataSet_1, false);
			app.register(submission_1);
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
			var grid_1 = new cpr.controls.Grid("grd1");
			grid_1.init({
				"dataSet": app.lookup("noticeList"),
				"columns": [
					{
						"width": "100px",
						"visible": false
					},
					{"width": "20px"},
					{"width": "30px"},
					{"width": "50px"},
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
								cell.targetColumnName = "noticeId";
								cell.text = "noticeId";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "noticeCategory";
								cell.text = "분류";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "noticeTitle";
								cell.text = "제목";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "noticeContent";
								cell.text = "상세 내용";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "noticeCreate";
								cell.text = "등록일";
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
								cell.columnName = "noticeId";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.columnName = "noticeCategory";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.columnName = "noticeTitle";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.columnName = "noticeContent";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.columnName = "noticeCreate";
							}
						}
					]
				}
			});
			container.addChild(grid_1, {
				"top": "80px",
				"right": "0px",
				"bottom": "100px",
				"left": "0px"
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
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
		}
	});
	app.title = "Notice";
	cpr.core.Platform.INSTANCE.register(app);
})();
