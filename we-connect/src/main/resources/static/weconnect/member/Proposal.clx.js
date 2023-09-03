/*
 * App URI: member/Proposal
 * Source Location: member/Proposal.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("member/Proposal", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * Proposal.js
			 * Created at 2023. 8. 21. 오전 03:25:21.
			 *
			 * @author keemn
			 ************************************************/

			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e) {
			   app.lookup("proposalListSub").send();
			   var comboBox = app.lookup("searchTypeCmb");
			   comboBox.fieldLabel = "전체";
			   comboBox.value = "all";
			}

			/*
			 * "새글" 버튼(createBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onCreateBtnClick(e) {
			   var createBtn = e.control;
			   var grid = app.lookup("proposalGrd");
			   app.openDialog("dialog/ProposalCreate", {
			      width: 1580,
			      height: 780
			   }, function(dialog) {
			      dialog.addEventListener("close", function(e) {
			         app.lookup("proposalListSub").send();
			      });
			   });
			}

			/*
			 * 그리드에서 row-dblclick 이벤트 발생 시 호출.
			 * detail이 row를 더블클릭 한 경우 발생하는 이벤트.
			 */
			function onProposalGrdRowDblclick(e) {
			   var proposalGrd = e.control;
			   var grid = app.lookup("proposalGrd");
			   var selectedRowIndices = grid.getSelectedRowIndices();
			   if (selectedRowIndices.length == 1) {
			      var proposalId = grid.dataSet.getValue(selectedRowIndices[0], "proposalId");
			      var proposalTitle = grid.dataSet.getValue(selectedRowIndices[0], "proposalTitle");
			      var proposalContent = grid.dataSet.getValue(selectedRowIndices[0], "proposalContent");
			      var proposalStatus = grid.dataSet.getValue(selectedRowIndices[0], "proposalStatus");
			      var PMemberId = grid.dataSet.getValue(selectedRowIndices[0], "PMemberId");
			      var value = {
			         "proposalId": proposalId,
			         "proposalTitle": proposalTitle,
			         "proposalContent": proposalContent,
			         "proposalStatus": proposalStatus, 
			         "PMemberId": PMemberId
			      }
			      app.openDialog("dialog/ProposalUpdateDelete", {
			         width: 1580,
			         height: 780
			      }, function(dialog) {
			         dialog.ready(function(dialogApp) {
			            dialogApp.initValue = value;
			         });
			         // 닫기 하면 send 후 reload
			         dialog.addEventListener("close", function(e) {
			            app.lookup("proposalListSub").send();
			         });
			      });
			   }
			}

			/*
			 * 서치 인풋에서 search 이벤트 발생 시 호출.
			 * Searchinput의 enter키 또는 검색버튼을 클릭하여 인풋의 값이 Search될때 발생하는 이벤트
			 */
			function onSearchIpbSearch(e) {
			   var searchIpb = e.control;
			   var submission = app.lookup("searchProposalSub");
			   submission.send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSearchProposalSubSubmitSuccess(e){
			   var searchProposalSub = e.control;
			   app.lookup("proposalGrd").redraw();
			}
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("proposalSearch");
			dataSet_1.parseData({
				"columns": [
					{"name": "type"},
					{"name": "value"}
				],
				"rows": [
					{"type": "전체", "value": "all"},
					{"type": "제목", "value": "title"},
					{"type": "내용", "value": "content"},
					{"type": "상태", "value": "status"}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("proposalList");
			dataSet_2.parseData({
				"columns": [
					{
						"name": "proposalId",
						"dataType": "number"
					},
					{"name": "proposalTitle"},
					{"name": "proposalContent"},
					{"name": "memberName"},
					{"name": "proposalCreate"},
					{"name": "proposalStatus"},
					{
						"name": "PMemberId",
						"dataType": "number"
					}
				],
				"rows": []
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
			
			var dataMap_2 = new cpr.data.DataMap("updateMemberParam");
			dataMap_2.parseData({
				"columns" : [{"name": "status"}]
			});
			app.register(dataMap_2);
			var submission_1 = new cpr.protocols.Submission("proposalListSub");
			submission_1.method = "get";
			submission_1.action = "member/proposals";
			submission_1.addResponseData(dataSet_2, false);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("searchProposalSub");
			submission_2.method = "get";
			submission_2.action = "member/proposals/search";
			submission_2.addRequestData(dataMap_1);
			submission_2.addResponseData(dataSet_2, false);
			if(typeof onSearchProposalSubSubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onSearchProposalSubSubmitSuccess);
			}
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
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var grid_1 = new cpr.controls.Grid("proposalGrd");
			grid_1.init({
				"dataSet": app.lookup("proposalList"),
				"columns": [
					{
						"width": "28px",
						"visible": false
					},
					{"width": "192px"},
					{"width": "55px"},
					{"width": "53px"},
					{"width": "50px"},
					{
						"width": "36px",
						"visible": false
					}
				],
				"header": {
					"rows": [{"height": "50px"}],
					"cells": [
						{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "proposalId";
								cell.text = "글번호";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "proposalTitle";
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
								cell.targetColumnName = "proposalCreate";
								cell.text = "등록일";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "proposalStatus";
								cell.text = "처리상태";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 5},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "PMemberId";
								cell.text = "PMemberId";
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
								cell.columnName = "proposalId";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.columnName = "proposalTitle";
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
								cell.columnName = "proposalCreate";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.columnName = "proposalStatus";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 5},
							"configurator": function(cell){
								cell.columnName = "PMemberId";
							}
						}
					]
				}
			});
			if(typeof onProposalGrdRowDblclick == "function") {
				grid_1.addEventListener("dblclick", onProposalGrdRowDblclick);
			}
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
				var searchInput_1 = new cpr.controls.SearchInput("searchIpb");
				searchInput_1.bind("value").toDataMap(app.lookup("searchParam"), "searchText");
				if(typeof onSearchIpbSearch == "function") {
					searchInput_1.addEventListener("search", onSearchIpbSearch);
				}
				container.addChild(searchInput_1, {
					"top": "0px",
					"right": "0px",
					"width": "560px",
					"height": "30px"
				});
				var comboBox_1 = new cpr.controls.ComboBox("searchTypeCmb");
				comboBox_1.style.css({
					"text-align" : "center"
				});
				comboBox_1.bind("value").toDataMap(app.lookup("searchParam"), "searchType");
				(function(comboBox_1){
					comboBox_1.setItemSet(app.lookup("proposalSearch"), {
						"label": "type",
						"value": "value"
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
			
			var button_1 = new cpr.controls.Button("createBtn");
			button_1.value = "새글";
			if(typeof onCreateBtnClick == "function") {
				button_1.addEventListener("click", onCreateBtnClick);
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
	app.title = "Proposal";
	cpr.core.Platform.INSTANCE.register(app);
})();
