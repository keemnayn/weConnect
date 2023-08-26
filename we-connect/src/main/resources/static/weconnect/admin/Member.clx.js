/*
 * App URI: admin/Member
 * Source Location: admin/Member.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("admin/Member", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * UserSide.js
			 * Created at 2023. 8. 8. 오후 3:30:36.
			 *
			 * @author chwec
			 ************************************************/

			/**
			 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
			 */
			exports.getText = function() {
				// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
				return "";
			};

			/*
			 * 트리에서 item-click 이벤트 발생 시 호출.
			 * 아이템 클릭시 발생하는 이벤트.
			 */
			function onTre1ItemClick( /* cpr.events.CItemEvent */ e) {
				/** 
				 * @type cpr.controls.Tree
				 */
				var tre1 = e.control;
				
				var vsAppId = e.item.row.getValue("appId");
				/*앱 아이디가 없는 경우 리턴합니다.*/
				if (vsAppId == "") {
					return;
				}
				
				var vcEmb = app.lookup("ea1");
				/*초기값 설정*/
				var voInitValue = {
					"value": e.item.label,
					"appId": vsAppId
				};
				/*앱을 로드하고 로드된 앱을 임베디드 앱에 설정합니다.*/
				cpr.core.App.load(vsAppId, function( /*cpr.core.App*/ loadedApp) {
					/*임베디드앱에 안에 앱이 있는 경우에는 앱을 삭제해줍니다.(다시 앱을 열고싶을때 스크립트 작성)*/
					if (vcEmb.getEmbeddedAppInstance()) {
						vcEmb.getEmbeddedAppInstance().dispose();
					}
					/*로드된 앱이 있는 경우에는 임베디드앱 안에 불러온 앱을 넣습니다.*/
					if (loadedApp) {
						/*초기값을 전달합니다.*/
						vcEmb.ready(function( /*cpr.controls.EmbeddedApp*/ embApp) {
							embApp.initValue = voInitValue;
						})
						/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
						vcEmb.app = loadedApp;
						vcEmb.redraw();
					}
					
				});
			}

			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e) {
				var vcEmb = app.lookup("ea1");
				/*초기값 설정*/
				var voInitValue = {
					"value": "홈",
					"appId": "member/MemberMain"
				};
				/*앱을 로드하고 로드된 앱을 임베디드 앱에 설정합니다.*/
				cpr.core.App.load("member/MemberMain", function( /*cpr.core.App*/ loadedApp) {
					/*임베디드앱에 안에 앱이 있는 경우에는 앱을 삭제해줍니다.(다시 앱을 열고싶을때 스크립트 작성)*/
					if (vcEmb.getEmbeddedAppInstance()) {
						vcEmb.getEmbeddedAppInstance().dispose();
					}
					/*로드된 앱이 있는 경우에는 임베디드앱 안에 불러온 앱을 넣습니다.*/
					if (loadedApp) {
						/*초기값을 전달합니다.*/
						vcEmb.ready(function( /*cpr.controls.EmbeddedApp*/ embApp) {
							embApp.initValue = voInitValue;
						})
						/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
						vcEmb.app = loadedApp;
					}
				});
			}

			/*
			 * 임베디드 앱에서 load 이벤트 발생 시 호출.
			 * 임베디드 앱이 준비되고 그려진 후에 디스패치 되는 이벤트.
			 */
			function onEa1Load(e) {
				var ea1 = e.control;
				
			}

			/*
			 * "관리자페이지" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e) {
				var button = e.control;
				var submission = app.lookup("adminSub");
				submission.send();
			}

			/*
			 * "회원가입" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2(e) {
				var button = e.control;
				window.location = "register";
			}

			/*
			 * "로그인" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick3(e) {
				var button = e.control;
				window.location = "login";
			}

			/*
			 * "로그아웃" 버튼(logoutBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onLogoutBtnClick(e) {
				var logoutBtn = e.control;
				app.lookup("logoutSub").send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onLogoutSubSubmitSuccess(e) {
				var logoutSub = e.control;
				var submission = app.lookup("logoutSub");
				var redirectUrl = submission.getMetadata("url");
				if (redirectUrl !== null) {
					window.location = redirectUrl;
				}
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onAdminSubSubmitSuccess(e) {
				var adminSub = e.control;
				var submission = app.lookup("adminSub");
				var url = submission.getMetadata("url");
				if (url !== null) {
					window.location = url;
				}
			}

			/*
			 * 서브미션에서 submit-error 이벤트 발생 시 호출.
			 * 통신 중 문제가 생기면 발생합니다.
			 */
			function onAdminSubSubmitError(e) {
				var adminSub = e.control;
				var submission = app.lookup("adminSub");
				var error = submission.getMetadata("error");
				var url = submission.getMetadata("url");
				alert(error);
				if (url != null) {
					window.location = url;
				}
			}
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("memberMenu");
			dataSet_1.parseData({
				"columns": [
					{
						"name": "label",
						"dataType": "string"
					},
					{"name": "value"},
					{"name": "icon"},
					{
						"name": "parent",
						"dataType": "string"
					},
					{"name": "appId"}
				],
				"rows": [
					{"label": "홈", "value": "홈", "icon": "img/member/home.png", "parent": "", "appId": "member/MemberMain"},
					{"label": "근태", "value": "근태", "icon": "img/member/attendance.png", "parent": "", "appId": ""},
					{"label": "프로젝트", "value": "프로젝트", "icon": "img/member/project.png", "parent": "", "appId": ""},
					{"label": "예약", "value": "예약", "icon": "img/member/reservation.png", "parent": "", "appId": ""},
					{"label": "게시판", "value": "게시판", "icon": "img/member/board.png", "parent": "", "appId": ""},
					{"label": "출/퇴근 기록", "value": "출/퇴근 기록", "icon": "img/member/commute.png", "parent": "근태", "appId": "member/AttendForm"},
					{"label": "연차신청", "value": "연차신청", "icon": "img/member/holiday.png", "parent": "근태", "appId": "member/LeaveRequestForm"},
					{"label": "일정", "value": "일정", "icon": "img/member/calender.png", "parent": "프로젝트", "appId": "member/project/Calendar1"},
					{"label": "워크보드", "value": "워크보드", "icon": "img/member/work_board.png", "parent": "프로젝트", "appId": ""},
					{"label": "회의실예약", "value": "회의실예약", "icon": "img/member/meeting_room.png", "parent": "예약", "appId": "member/RoomReservList"},
					{"label": "자유게시판", "value": "자유게시판", "icon": "img/member/post.png", "parent": "게시판", "appId": "member/FreeBoard"},
					{"label": "공지사항", "value": "공지사항", "icon": "img/member/post.png", "parent": "게시판", "appId": "member/Notice"},
					{"label": "건의사항", "value": "건의사항", "icon": "img/member/suggestions.png", "parent": "게시판", "appId": "member/Proposal"},
					{"label": "공통", "value": "공통", "icon": "img/member/team.png", "parent": "워크보드", "appId": "member/project/TeamPost"},
					{"label": "나의 보드", "value": "나의 보드", "icon": "img/member/solo.png", "parent": "워크보드", "appId": "member/project/MyPost"}
				]
			});
			app.register(dataSet_1);
			var submission_1 = new cpr.protocols.Submission("logoutSub");
			submission_1.action = "logout";
			if(typeof onLogoutSubSubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onLogoutSubSubmitSuccess);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("adminSub");
			submission_2.method = "get";
			submission_2.action = "admin/check";
			if(typeof onAdminSubSubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onAdminSubSubmitSuccess);
			}
			if(typeof onAdminSubSubmitError == "function") {
				submission_2.addEventListener("submit-error", onAdminSubSubmitError);
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
				"top" : "0px",
				"height" : "100%",
				"left" : "0px"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var tree_1 = new cpr.controls.Tree("tre1");
			tree_1.style.css({
				"background-color" : "#F1EFFF",
				"border-bottom-color" : "#f1efff",
				"border-left-color" : "#f1efff",
				"border-top-color" : "#f1efff",
				"border-right-color" : "#f1efff"
			});
			(function(tree_1){
				tree_1.setItemSet(app.lookup("memberMenu"), {
					"label": "label",
					"value": "value",
					"icon": "icon",
					"parentValue": "parent"
				});
			})(tree_1);
			if(typeof onTre1ItemClick == "function") {
				tree_1.addEventListener("item-click", onTre1ItemClick);
			}
			container.addChild(tree_1, {
				"top": "50px",
				"bottom": "50px",
				"left": "0px",
				"width": "300px"
			});
			
			var group_1 = new cpr.controls.Container();
			group_1.style.css({
				"background-color" : "#F1EFFF"
			});
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var image_1 = new cpr.controls.Image();
				image_1.src = "img/enjoy.png";
				container.addChild(image_1, {
					"top": "5px",
					"left": "0px",
					"width": "300px",
					"height": "40px"
				});
				var button_1 = new cpr.controls.Button();
				button_1.value = "관리자페이지";
				if(typeof onButtonClick == "function") {
					button_1.addEventListener("click", onButtonClick);
				}
				container.addChild(button_1, {
					"top": "20px",
					"left": "1468px",
					"width": "100px",
					"height": "20px"
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "회원가입";
				if(typeof onButtonClick2 == "function") {
					button_2.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_2, {
					"top": "20px",
					"left": "1621px",
					"width": "100px",
					"height": "20px"
				});
				var button_3 = new cpr.controls.Button();
				button_3.value = "로그인";
				if(typeof onButtonClick3 == "function") {
					button_3.addEventListener("click", onButtonClick3);
				}
				container.addChild(button_3, {
					"top": "20px",
					"left": "1771px",
					"width": "100px",
					"height": "20px"
				});
				var button_4 = new cpr.controls.Button("logoutBtn");
				button_4.value = "로그아웃";
				if(typeof onLogoutBtnClick == "function") {
					button_4.addEventListener("click", onLogoutBtnClick);
				}
				container.addChild(button_4, {
					"top": "20px",
					"left": "1285px",
					"width": "100px",
					"height": "20px"
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "0px",
				"right": "0px",
				"left": "0px",
				"height": "50px"
			});
			
			var group_2 = new cpr.controls.Container();
			group_2.style.css({
				"background-color" : "#E0E0E0"
			});
			var xYLayout_3 = new cpr.controls.layouts.XYLayout();
			group_2.setLayout(xYLayout_3);
			container.addChild(group_2, {
				"right": "0px",
				"bottom": "0px",
				"left": "0px",
				"height": "50px"
			});
			
			var embeddedApp_1 = new cpr.controls.EmbeddedApp("ea1");
			if(typeof onEa1Init2 == "function") {
				embeddedApp_1.addEventListener("init", onEa1Init2);
			}
			container.addChild(embeddedApp_1, {
				"top": "70px",
				"right": "20px",
				"bottom": "70px",
				"left": "320px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "Member";
	cpr.core.Platform.INSTANCE.register(app);
})();
