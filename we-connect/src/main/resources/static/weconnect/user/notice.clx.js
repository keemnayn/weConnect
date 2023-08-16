/*
 * App URI: user/Notice
 * Source Location: user/Notice.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("user/Notice", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("notice");
			dataSet_1.parseData({
				"columns": [
					{"name": "noticeNo"},
					{
						"name": "noticetitle",
						"dataType": "string"
					},
					{"name": "noticeContent"},
					{"name": "noticeType"}
				],
				"rows": [
					{"noticeNo": "1", "noticetitle": "공지합니다", "noticeContent": "공지할게요", "noticeType": "점검"},
					{"noticeNo": "2", "noticetitle": "공지합니다", "noticeContent": "공지할게요", "noticeType": "공지"},
					{"noticeNo": "3", "noticetitle": "공지합니다", "noticeContent": "공지할게요", "noticeType": "점검"},
					{"noticeNo": "4", "noticetitle": "공지합니다", "noticeContent": "공지할게요", "noticeType": "점검"},
					{"noticeNo": "5", "noticetitle": "공지합니다", "noticeContent": "공지할게요", "noticeType": "공지"}
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
				"dataSet": app.lookup("notice"),
				"columns": [
					{"width": "50px"},
					{"width": "60px"},
					{"width": "100px"},
					{"width": "150px"}
				],
				"header": {
					"rows": [{"height": "50px"}],
					"cells": [
						{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "noticeNo";
								cell.text = "noticeNo";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "noticeType";
								cell.text = "noticeType";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "noticetitle";
								cell.text = "noticetitle";
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
						}
					]
				},
				"detail": {
					"rows": [{"height": "50px"}],
					"cells": [
						{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.columnName = "noticeNo";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.columnName = "noticeType";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.columnName = "noticetitle";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.columnName = "noticeContent";
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
			
			var pageIndexer_1 = new cpr.controls.PageIndexer();
			pageIndexer_1.init(1, 1, 1);
			container.addChild(pageIndexer_1, {
				"bottom": "50px",
				"left": "290px",
				"width": "1000px",
				"height": "50px"
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
		}
	});
	app.title = "Notice";
	cpr.core.Platform.INSTANCE.register(app);
})();
