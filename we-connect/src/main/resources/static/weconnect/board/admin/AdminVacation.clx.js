/*
 * App URI: board/admin/AdminVacation
 * Source Location: board/admin/AdminVacation.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("board/admin/AdminVacation", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * Vaction.js
			 * Created at 2023. 8. 9. 오전 10:47:05.
			 *
			 * @author Axl Rose
			 ************************************************/;
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("vacationList");
			dataSet_1.parseData({
				"columns": [
					{"name": "name"},
					{"name": "grade"},
					{"name": "department"},
					{"name": "departure"},
					{"name": "return"},
					{"name": "state"}
				],
				"rows": [
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "승인"},
					{"name": "박해준", "grade": "사원", "department": "인사", "departure": "2023-08-08", "return": "2023-08-10", "state": "거절"}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("search");
			dataSet_2.parseData({
				"columns": [{"name": "type"}],
				"rows": [
					{"type": "전체"},
					{"type": "이름"},
					{"type": "직급"},
					{"type": "부서"},
					{"type": "상태"}
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
			var tabFolder_1 = new cpr.controls.TabFolder();
			
			var tabItem_1 = (function(tabFolder){
				var tabItem_1 = new cpr.controls.TabItem();
				tabItem_1.text = "연차관리";
				var group_1 = new cpr.controls.Container();
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_1.setLayout(xYLayout_2);
				(function(container){
					var grid_1 = new cpr.controls.Grid("grd1");
					grid_1.init({
						"dataSet": app.lookup("vacationList"),
						"columns": [
							{"width": "25px"},
							{"width": "100px"},
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
										cell.columnType = "checkbox";
										cell.filterable = false;
										cell.sortable = false;
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "name";
										cell.text = "이름";
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "grade";
										cell.text = "직급";
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 3},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "department";
										cell.text = "부서";
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "departure";
										cell.text = "출발";
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 5},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "return";
										cell.text = "복귀";
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 6},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "state";
										cell.text = "상태";
										cell.style.css({
											"text-align" : "center"
										});
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
										cell.style.css({
											"text-align" : "center"
										});
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.columnName = "name";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_1 = new cpr.controls.Output();
											output_1.style.css({
												"text-align" : "center"
											});
											output_1.bind("value").toDataColumn("name");
											return output_1;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.columnName = "grade";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_2 = new cpr.controls.Output();
											output_2.style.css({
												"text-align" : "center"
											});
											output_2.bind("value").toDataColumn("grade");
											return output_2;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 3},
									"configurator": function(cell){
										cell.columnName = "department";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_3 = new cpr.controls.Output();
											output_3.style.css({
												"text-align" : "center"
											});
											output_3.bind("value").toDataColumn("department");
											return output_3;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.columnName = "departure";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_4 = new cpr.controls.Output();
											output_4.style.css({
												"text-align" : "center"
											});
											output_4.bind("value").toDataColumn("departure");
											return output_4;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 5},
									"configurator": function(cell){
										cell.columnName = "return";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_5 = new cpr.controls.Output();
											output_5.style.css({
												"text-align" : "center"
											});
											output_5.bind("value").toDataColumn("return");
											return output_5;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 6},
									"configurator": function(cell){
										cell.columnName = "state";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_6 = new cpr.controls.Output();
											output_6.style.css({
												"text-align" : "center"
											});
											output_6.bind("value").toDataColumn("state");
											return output_6;
										})();
									}
								}
							]
						}
					});
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
						var button_1 = new cpr.controls.Button();
						button_1.value = "저장";
						container.addChild(button_1, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var button_2 = new cpr.controls.Button();
						button_2.value = "거절";
						container.addChild(button_2, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var button_3 = new cpr.controls.Button();
						button_3.value = "승인";
						container.addChild(button_3, {
							"colIndex": 0,
							"rowIndex": 0
						});
					})(group_2);
					container.addChild(group_2, {
						"top": "5px",
						"right": "0px",
						"width": "200px",
						"height": "40px"
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
						"top": "10px",
						"right": "520px",
						"width": "100px",
						"height": "30px"
					});
					var searchInput_1 = new cpr.controls.SearchInput();
					container.addChild(searchInput_1, {
						"top": "10px",
						"right": "220px",
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
		}
	});
	app.title = "AdminVacation";
	cpr.core.Platform.INSTANCE.register(app);
})();
