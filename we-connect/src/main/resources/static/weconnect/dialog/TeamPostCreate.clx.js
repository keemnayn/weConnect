/*
 * App URI: dialog/TeamPostCreate
 * Source Location: dialog/TeamPostCreate.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("dialog/TeamPostCreate", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * TeamPostCreate.js
			 * Created at 2023. 8. 25. 오후 5:15:52.
			 *
			 * @author keemn
			 ************************************************/

			/*
			 * "등록" 버튼(insertBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onInsertBtnClick(e) {
				var insertBtn = e.control;
				var submission = app.lookup("teamPostCreateSub");
				var projectId = app.lookup("projectNameCmb").value;
				var teamPostTitle = app.lookup("teamPostTitleIpb").value;
				var teamPostContent = app.lookup("teamPostContentIpb").value;
				if (!projectId || !teamPostTitle || !teamPostContent) {
					alert("참여하는 프로젝트 팀 게시판의 제목과 내용을 모두 입력해주세요.");
				} else {
					submission.send();
				}
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onTeamPostCreateSubSubmitSuccess(e) {
				var teamPostCreateSub = e.control;
				alert("팀게시판 게시물 등록 완료");
				app.close();
			}

			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e) {
				app.lookup("projectInfoSub").send();
			}

			/*
			 * "취소" 버튼(cancleBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onCancleBtnClick(e){
				var cancleBtn = e.control;
				app.close();
			}
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("projectInfo");
			dataSet_1.parseData({
				"columns" : [
					{
						"name": "projectId",
						"dataType": "number"
					},
					{"name": "projectName"}
				]
			});
			app.register(dataSet_1);
			var dataMap_1 = new cpr.data.DataMap("teamPostCreateParam");
			dataMap_1.parseData({
				"columns" : [
					{"name": "teamPostTitle"},
					{"name": "teamPostContent"},
					{"name": "projectId"}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("projectInfoSub");
			submission_1.method = "get";
			submission_1.action = "member/teams";
			submission_1.addResponseData(dataSet_1, false);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("teamPostCreateSub");
			submission_2.action = "member/teams";
			submission_2.addRequestData(dataMap_1);
			if(typeof onTeamPostCreateSubSubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onTeamPostCreateSubSubmitSuccess);
			}
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
						"rowIndex": 0
					});
					var textArea_1 = new cpr.controls.TextArea("teamPostContentIpb");
					textArea_1.bind("value").toDataMap(app.lookup("teamPostCreateParam"), "teamPostContent");
					container.addChild(textArea_1, {
						"colIndex": 1,
						"rowIndex": 0
					});
				})(group_2);
				container.addChild(group_2, {
					"top": "209px",
					"right": "5px",
					"bottom": "62px",
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
				formLayout_2.setRows(["50px"]);
				group_3.setLayout(formLayout_2);
				(function(container){
					var output_2 = new cpr.controls.Output();
					output_2.value = "프로젝트명";
					container.addChild(output_2, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var comboBox_1 = new cpr.controls.ComboBox("projectNameCmb");
					var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("teamPostCreateParam"));
					comboBox_1.setBindContext(dataMapContext_1);
					comboBox_1.bind("value").toDataMap(app.lookup("teamPostCreateParam"), "projectId");
					(function(comboBox_1){
						comboBox_1.setItemSet(app.lookup("projectInfo"), {
							"label": "projectName",
							"value": "projectId"
						});
					})(comboBox_1);
					container.addChild(comboBox_1, {
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
				output_3.value = "프로젝트 팀원들에게 전달할 내용을 자유롭게 작성해주세요.";
				container.addChild(output_3, {
					"top": "10px",
					"right": "5px",
					"left": "5px",
					"height": "50px"
				});
				var button_1 = new cpr.controls.Button("cancleBtn");
				button_1.value = "취소";
				if(typeof onCancleBtnClick == "function") {
					button_1.addEventListener("click", onCancleBtnClick);
				}
				container.addChild(button_1, {
					"right": "506px",
					"bottom": "5px",
					"width": "200px",
					"height": "50px"
				});
				var button_2 = new cpr.controls.Button("insertBtn");
				button_2.value = "등록";
				if(typeof onInsertBtnClick == "function") {
					button_2.addEventListener("click", onInsertBtnClick);
				}
				container.addChild(button_2, {
					"bottom": "5px",
					"left": "506px",
					"width": "200px",
					"height": "50px"
				});
				var group_4 = new cpr.controls.Container();
				var formLayout_3 = new cpr.controls.layouts.FormLayout();
				formLayout_3.scrollable = false;
				formLayout_3.topMargin = "5px";
				formLayout_3.rightMargin = "5px";
				formLayout_3.bottomMargin = "5px";
				formLayout_3.leftMargin = "5px";
				formLayout_3.horizontalSpacing = "10px";
				formLayout_3.verticalSpacing = "10px";
				formLayout_3.setColumns(["100px", "1fr"]);
				formLayout_3.setRows(["50px"]);
				group_4.setLayout(formLayout_3);
				(function(container){
					var output_4 = new cpr.controls.Output();
					output_4.value = "제목";
					container.addChild(output_4, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var inputBox_1 = new cpr.controls.InputBox("teamPostTitleIpb");
					var dataMapContext_2 = new cpr.bind.DataMapContext(app.lookup("teamPostCreateParam"));
					inputBox_1.setBindContext(dataMapContext_2);
					inputBox_1.bind("value").toDataMap(app.lookup("teamPostCreateParam"), "teamPostTitle");
					container.addChild(inputBox_1, {
						"colIndex": 1,
						"rowIndex": 0,
						"colSpan": 1,
						"rowSpan": 1
					});
				})(group_4);
				container.addChild(group_4, {
					"top": "139px",
					"right": "6px",
					"left": "4px",
					"height": "60px"
				});
			})(group_1);
			container.addChild(group_1, {
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
	app.title = "팀포스트 등록 팝업";
	cpr.core.Platform.INSTANCE.register(app);
})();
