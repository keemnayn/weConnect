/*
 * App URI: dialog/TeamPostUpdateDelete
 * Source Location: dialog/TeamPostUpdateDelete.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("dialog/TeamPostUpdateDelete", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * TeamPostCreate.js
			 * Created at 2023. 8. 27. 오후 5:15:52.
			 *
			 * @author keemn
			 ************************************************/

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e) {
				var hostProperty = app.getHostProperty("initValue");
				var teamPostId = hostProperty["teamPostId"];
				var teamPostTitle = hostProperty["teamPostTitle"];
				var teamPostContent = hostProperty["teamPostContent"];
				var projectId = hostProperty["projectId"];
				app.lookup("teamPostTitleIpb").value = teamPostTitle;
				app.lookup("teamPostContentIpb").value = teamPostContent;
				app.lookup("teamPostIdOpb").value = teamPostId;
			}

			/*
			 * "수정" 버튼(updateBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onUpdateBtnClick(e) {
				var updateBtn = e.control;
				var submission = app.lookup("teamPostUpdateSub");
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
			function onTeamPostUpdateSubSubmitSuccess(e) {
				var teamPostUpdateSub = e.control;
				if (!confirm("해당 글을 수정하시겠습니까?")) {
					// 취소(아니오) 버튼 클릭 시 이벤트
					alert("취소를 누르셨습니다");
				} else {
					alert("팀 포스트 수정 완료");
					app.close();
				}	
			}

			/*
			 * "삭제" 버튼(deleteBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onDeleteBtnClick(e) {
				var deleteBtn = e.control;
				app.lookup("teamPostDeleteSub").send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onTeamPostDeleteSubSubmitSuccess(e) {
				var teamPostDeleteSub = e.control;
				if (!confirm("해당 글을 삭제하시겠습니까? 한 번 삭제된 글은 복구할 수 없습니다.")) {
					// 취소(아니오) 버튼 클릭 시 이벤트
					alert("취소를 누르셨습니다");
				} else {
					alert("팀게시글 삭제 완료");
					app.close();
				}
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
			var dataMap_1 = new cpr.data.DataMap("teamPostUpdateDeleteParam");
			dataMap_1.parseData({
				"columns" : [
					{"name": "teamPostTitle"},
					{"name": "teamPostContent"},
					{"name": "teamPostId"}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("projectInfoSub");
			submission_1.method = "get";
			submission_1.action = "member/teams";
			submission_1.addResponseData(dataSet_1, false);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("teamPostUpdateSub");
			submission_2.method = "put";
			submission_2.action = "member/teams";
			submission_2.addRequestData(dataMap_1);
			if(typeof onTeamPostUpdateSubSubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onTeamPostUpdateSubSubmitSuccess);
			}
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("teamPostDeleteSub");
			submission_3.method = "delete";
			submission_3.action = "member/teams";
			submission_3.addRequestData(dataMap_1);
			if(typeof onTeamPostDeleteSubSubmitSuccess == "function") {
				submission_3.addEventListener("submit-success", onTeamPostDeleteSubSubmitSuccess);
			}
			app.register(submission_3);
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
					var inputBox_1 = new cpr.controls.InputBox("teamPostContentIpb");
					var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("teamPostUpdateDeleteParam"));
					inputBox_1.setBindContext(dataMapContext_1);
					inputBox_1.bind("value").toDataMap(app.lookup("teamPostUpdateDeleteParam"), "teamPostContent");
					container.addChild(inputBox_1, {
						"colIndex": 1,
						"rowIndex": 0,
						"colSpan": 1,
						"rowSpan": 1
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
				container.addChild(group_3, {
					"top": "70px",
					"right": "5px",
					"left": "5px",
					"height": "60px"
				});
				var output_2 = new cpr.controls.Output();
				output_2.value = "프로젝트 팀원들에게 전달할 내용을 자유롭게 작성해주세요.";
				container.addChild(output_2, {
					"top": "10px",
					"right": "425px",
					"left": "5px",
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
					var output_3 = new cpr.controls.Output();
					output_3.value = "제목";
					container.addChild(output_3, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var inputBox_2 = new cpr.controls.InputBox("teamPostTitleIpb");
					var dataMapContext_2 = new cpr.bind.DataMapContext(app.lookup("teamPostUpdateDeleteParam"));
					inputBox_2.setBindContext(dataMapContext_2);
					inputBox_2.bind("value").toDataMap(app.lookup("teamPostUpdateDeleteParam"), "teamPostTitle");
					container.addChild(inputBox_2, {
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
				var button_1 = new cpr.controls.Button("deleteBtn");
				button_1.value = "삭제";
				if(typeof onDeleteBtnClick == "function") {
					button_1.addEventListener("click", onDeleteBtnClick);
				}
				container.addChild(button_1, {
					"right": "507px",
					"bottom": "5px",
					"width": "200px",
					"height": "50px"
				});
				var button_2 = new cpr.controls.Button("updateBtn");
				button_2.value = "수정";
				if(typeof onUpdateBtnClick == "function") {
					button_2.addEventListener("click", onUpdateBtnClick);
				}
				container.addChild(button_2, {
					"bottom": "5px",
					"left": "505px",
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
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "팀포스트 수정삭제 팝업";
	cpr.core.Platform.INSTANCE.register(app);
})();
