/*
 * App URI: dialog/ProposalUpdateDelete
 * Source Location: dialog/ProposalUpdateDelete.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("dialog/ProposalUpdateDelete", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * ProposalCreate.js
			 * Created at 2023. 8. 22. 오후 11:35:52.
			 *
			 * @author keemn
			 ************************************************/

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e){
				var hostProperty=app.getHostProperty("initValue");
				var proposalId=hostProperty["proposalId"];
				var proposalTitle=hostProperty["proposalTitle"];
				var proposalContent=hostProperty["proposalContent"];
				var proposalStatus=hostProperty["proposalStatus"];
				app.lookup("proposalIdOpb").value=proposalId;
				app.lookup("proposalTitleIpb").value=proposalTitle;
				app.lookup("proposalContentIpb").value=proposalContent;
			}

			/*
			 * "수정" 버튼(btnUpdate)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnUpdateClick(e) {
				var btnUpdate = e.control;
				var submission = app.lookup("proposalUpdateDeleteSub");
				var proposalTitle = app.lookup("proposalTitleIpb").value;
				var proposalContent = app.lookup("proposalContentIpb").value;
				if (!proposalTitle || !proposalContent) {
					alert("건의글의 제목과 내용을 모두 입력해주세요.");
				} else {
					submission.send();
				}
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("status");
			dataSet_1.parseData({
				"columns": [{"name": "status"}],
				"rows": [
					{"status": "(선택)"},
					{"status": "처리중"},
					{"status": "완료"}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("proposalReadList");
			dataSet_2.parseData({
				"columns": [
					{"name": "proposalId"},
					{"name": "proposalTitle"},
					{"name": "proposalStatus"},
					{"name": "proposalCreate"},
					{"name": "memberId"}
				],
				"rows": []
			});
			app.register(dataSet_2);
			var dataMap_1 = new cpr.data.DataMap("proposalUpdateParam");
			dataMap_1.parseData({
				"columns" : [
					{"name": "proposalTitle"},
					{"name": "proposalContent"},
					{"name": "proposalId"}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("proposalUpdateDeleteSub");
			submission_1.action = "member/proposals";
			submission_1.addRequestData(dataMap_1);
			if(typeof onProposalCreateSubSubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onProposalCreateSubSubmitSuccess);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("proposalReadSub");
			submission_2.method = "get";
			submission_2.action = "member/proposals";
			submission_2.addResponseData(dataSet_2, false);
			app.register(submission_2);
			app.supportMedia("all and (min-width: 1024px)", "default");
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
			var group_1 = new cpr.controls.Container();
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var group_2 = new cpr.controls.Container();
				var formLayout_1 = new cpr.controls.layouts.FormLayout();
				formLayout_1.scrollable = false;
				formLayout_1.topMargin = "5px";
				formLayout_1.rightMargin = "5px";
				formLayout_1.bottomMargin = "5px";
				formLayout_1.leftMargin = "5px";
				formLayout_1.horizontalSpacing = "10px";
				formLayout_1.verticalSpacing = "10px";
				formLayout_1.setColumns(["100px", "1fr"]);
				formLayout_1.setRows(["1fr"]);
				group_2.setLayout(formLayout_1);
				(function(container){
					var output_1 = new cpr.controls.Output();
					output_1.value = "내용";
					container.addChild(output_1, {
						"colIndex": 0,
						"rowIndex": 0,
						"colSpan": 1,
						"rowSpan": 1
					});
					var inputBox_1 = new cpr.controls.InputBox("proposalContentIpb");
					var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("proposalUpdateParam"));
					inputBox_1.setBindContext(dataMapContext_1);
					inputBox_1.bind("value").toDataMap(app.lookup("proposalUpdateParam"), "proposalContent");
					container.addChild(inputBox_1, {
						"colIndex": 1,
						"rowIndex": 0,
						"colSpan": 1,
						"rowSpan": 1
					});
				})(group_2);
				container.addChild(group_2, {
					"top": "138px",
					"right": "5px",
					"bottom": "60px",
					"left": "5px"
				});
				var group_3 = new cpr.controls.Container();
				var formLayout_2 = new cpr.controls.layouts.FormLayout();
				formLayout_2.scrollable = false;
				formLayout_2.topMargin = "5px";
				formLayout_2.rightMargin = "5px";
				formLayout_2.bottomMargin = "5px";
				formLayout_2.leftMargin = "5px";
				formLayout_2.horizontalSpacing = "10px";
				formLayout_2.verticalSpacing = "10px";
				formLayout_2.setColumns(["100px", "1fr"]);
				formLayout_2.setRows(["1fr"]);
				group_3.setLayout(formLayout_2);
				(function(container){
					var output_2 = new cpr.controls.Output();
					output_2.value = "제목";
					container.addChild(output_2, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var inputBox_2 = new cpr.controls.InputBox("proposalTitleIpb");
					var dataMapContext_2 = new cpr.bind.DataMapContext(app.lookup("proposalUpdateParam"));
					inputBox_2.setBindContext(dataMapContext_2);
					inputBox_2.bind("value").toDataMap(app.lookup("proposalUpdateParam"), "proposalTitle");
					container.addChild(inputBox_2, {
						"colIndex": 1,
						"rowIndex": 0
					});
				})(group_3);
				container.addChild(group_3, {
					"top": "70px",
					"right": "5px",
					"left": "5px",
					"height": "60px"
				});
				var output_3 = new cpr.controls.Output();
				output_3.value = "해당 게시판은 익명으로 운영됩니다. 자유롭게 남겨주세요.";
				container.addChild(output_3, {
					"top": "10px",
					"right": "773px",
					"left": "5px",
					"height": "50px"
				});
				var button_1 = new cpr.controls.Button("btnRevert");
				button_1.value = "삭제";
				if(typeof onBtnRevertClick == "function") {
					button_1.addEventListener("click", onBtnRevertClick);
				}
				container.addChild(button_1, {
					"right": "506px",
					"bottom": "10px",
					"width": "200px",
					"height": "50px"
				});
				var button_2 = new cpr.controls.Button("btnUpdate");
				button_2.value = "수정";
				if(typeof onBtnUpdateClick == "function") {
					button_2.addEventListener("click", onBtnUpdateClick);
				}
				container.addChild(button_2, {
					"bottom": "10px",
					"left": "506px",
					"width": "200px",
					"height": "50px"
				});
				var output_4 = new cpr.controls.Output("proposalIdOpb");
				output_4.style.css({
					"text-align" : "right"
				});
				var dataMapContext_3 = new cpr.bind.DataMapContext(app.lookup("proposalUpdateParam"));
				output_4.setBindContext(dataMapContext_3);
				output_4.bind("value").toDataMap(app.lookup("proposalUpdateParam"), "proposalId");
				container.addChild(output_4, {
					"top": "21px",
					"left": "1375px",
					"width": "200px",
					"height": "50px"
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "0px",
				"right": "0px",
				"bottom": "0px",
				"left": "0px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "건의사항 수정삭제 팝업";
	cpr.core.Platform.INSTANCE.register(app);
})();
