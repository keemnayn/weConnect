/*
 * App URI: member/MemberMain
 * Source Location: member/MemberMain.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("member/MemberMain", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * newMain.js
			 * Created at 2023. 8. 8. 오후 11:40:21.
			 *
			 * @author kjh970605
			 ************************************************/
			let intervalID;

			function clock() {
				const clockTarget = app.lookup("user_clock");
				const user_day = app.lookup("day");
				const date = new Date();
				const hours = date.getHours();
				const month = date.getMonth();
				const clockDate = date.getDate();
				const day = date.getDay();
				const minutes = date.getMinutes();
				const seconds = date.getSeconds();
				const week = ['일', '월', '화', '수', '목', '금', '토'];
				clockTarget.value = `${hours}시 ${minutes}분 ${seconds}초`
				user_day.value = `${month+1}월 ${clockDate}일 ${week[day]}요일`
				
			}

			/*
			 * "출근" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e) {
				var button = e.control;
				const go = app.lookup("go");
				const date = new Date();
				const hours = date.getHours();
				const minutes = date.getMinutes();
				const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
				go.value = `"${hours}: ${formattedMinutes}"`
				if (confirm("입실처리하시겠습니까")) {
					let submission = app.lookup("Attendance1");
					submission.send();
				}
			}

			/*
			 * "퇴근" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2(e) {
				var button = e.control;
				const back = app.lookup("back");
				const date = new Date();
				const hours = date.getHours();
				const minutes = date.getMinutes();
				const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
				back.value = `"${hours}: ${formattedMinutes}""`
				if (confirm("퇴실하시겠습니까?")) {
					let UpdateAttendance = app.lookup("UpdateAttendance");
					UpdateAttendance.send();
				}
			}

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad2(e) {
				clock();
				intervalID = setInterval(clock, 1000);
			}

			/*
			 * 루트 컨테이너에서 before-unload 이벤트 발생 시 호출.
			 * 앱이 언로드되기 전에 발생하는 이벤트 입니다. 취소할 수 있습니다.
			 */
			function onBodyBeforeUnload(e) {
				clearInterval(intervalID);
			}
			/*
			 * 서브미션에서 submit-error 이벤트 발생 시 호출.
			 * 통신 중 문제가 생기면 발생합니다.
			 */
			function onAttendance1SubmitError(e) {
				var attendance1 = e.control;
				var submission = app.lookup("Attendance1");
				let error = submission.getMetadata("error");
				let button = app.lookup("Btn_workIn");
				button.enabled = false;
				alert(error);
			}

			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit2(e) {
				var submission = app.lookup("Img");
				submission.send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onImgSubmitSuccess(e) {
				var img = e.control;
				app.lookup("profile").redraw();
			}

			/*
			 * 파일 인풋에서 value-change 이벤트 발생 시 호출.
			 * FileInput의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
			 */
			function onFi1ValueChange(e) {
				var fi1 = e.control;
				var image = app.lookup("profile");
				var fileInput = app.lookup("fi1");
				let fi2 =fileInput.file
				let submission = app.lookup("imgSend");
				console.log(fi1.file);
				console.log(fi2);
				if (fileInput.files && fileInput.files[0]) {
					var reader = new FileReader();
					reader.onload = function(e) {
						image.src = e.target.result;
					};
					reader.readAsDataURL(fileInput.files[0]);
				}
				submission.addFileParameter("profileImagePath",fi2);
				submission.send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onImgSendSubmitSuccess(e){
				var imgSend = e.control;
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onImgSendSubmitSuccess2(e){
				var imgSend = e.control;
				alert("프로필 변경 선공");
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("img");
			dataSet_1.parseData({
				"columns" : [{
					"name": "profileImagePath",
					"dataType": "string"
				}]
			});
			app.register(dataSet_1);
			var dataMap_1 = new cpr.data.DataMap("profileImage");
			dataMap_1.parseData({
				"columns" : [
					{
						"name": "profileImageId",
						"dataType": "string"
					},
					{"name": "profileImagesName"},
					{
						"name": "profileImagePath",
						"dataType": "string"
					},
					{
						"name": "memberId",
						"dataType": "string"
					}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("Attendance1");
			submission_1.action = "member/attendance";
			if(typeof onAttendance1SubmitSuccess2 == "function") {
				submission_1.addEventListener("submit-success", onAttendance1SubmitSuccess2);
			}
			if(typeof onAttendance1SubmitError == "function") {
				submission_1.addEventListener("submit-error", onAttendance1SubmitError);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("UpdateAttendance");
			submission_2.method = "put";
			submission_2.action = "member/attendance";
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("Img");
			submission_3.method = "get";
			submission_3.action = "member/profile";
			submission_3.addResponseData(dataSet_1, false);
			if(typeof onImgSubmitSuccess == "function") {
				submission_3.addEventListener("submit-success", onImgSubmitSuccess);
			}
			app.register(submission_3);
			
			var submission_4 = new cpr.protocols.Submission("imgSend");
			submission_4.method = "put";
			submission_4.action = "member/profile";
			submission_4.mediaType = "multipart/form-data";
			submission_4.addRequestData(dataMap_1);
			if(typeof onImgSendSubmitSuccess2 == "function") {
				submission_4.addEventListener("submit-success", onImgSendSubmitSuccess2);
			}
			app.register(submission_4);
			app.supportMedia("all and (min-width: 1920px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"font-weight" : "400",
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			group_1.style.setClasses(["main_layout1"]);
			group_1.style.css({
				"border-right-style" : "solid",
				"border-bottom-color" : "#bfbfbf",
				"border-left-style" : "solid",
				"border-left-color" : "#bfbfbf",
				"border-top-color" : "#bfbfbf",
				"border-bottom-style" : "solid",
				"border-right-color" : "#bfbfbf",
				"border-top-style" : "solid"
			});
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var hTMLSnippet_1 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_1.value = "<h3>사용자 프로필<\/h3>";
				container.addChild(hTMLSnippet_1, {
					"top": "-16px",
					"left": "12px",
					"width": "150px",
					"height": "100px"
				});
				var hTMLSnippet_2 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_2.value = "<h3>사원: 김정현<\/h3>";
				container.addChild(hTMLSnippet_2, {
					"top": "8px",
					"left": "150px",
					"width": "100px",
					"height": "50px"
				});
				var hTMLSnippet_3 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_3.value = "<span>부서:<\/span>";
				container.addChild(hTMLSnippet_3, {
					"top": "64px",
					"left": "150px",
					"width": "100px",
					"height": "20px"
				});
				var hTMLSnippet_4 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_4.value = "<span>계정:<\/span>";
				container.addChild(hTMLSnippet_4, {
					"top": "93px",
					"left": "150px",
					"width": "100px",
					"height": "20px"
				});
				var hTMLSnippet_5 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_5.value = "<p><\/p>";
				hTMLSnippet_5.style.setClasses(["line"]);
				hTMLSnippet_5.style.css({
					"border-top-width" : "1px",
					"border-left-style" : "solid",
					"border-right-width" : "1px",
					"border-bottom-width" : "1px",
					"border-left-width" : "1px"
				});
				container.addChild(hTMLSnippet_5, {
					"top": "0px",
					"bottom": "0px",
					"left": "134px",
					"width": "13px"
				});
				var image_1 = new cpr.controls.Image("profile");
				image_1.bind("src").toDataSet(app.lookup("img"), "profileImagePath", 0);
				if(typeof onProfileValueChange2 == "function") {
					image_1.addEventListener("value-change", onProfileValueChange2);
				}
				container.addChild(image_1, {
					"top": "44px",
					"left": "12px",
					"width": "111px",
					"height": "115px"
				});
				var fileInput_1 = new cpr.controls.FileInput("fi1");
				fileInput_1.placeholder = "프로필 수정";
				fileInput_1.bind("value").toDataMap(app.lookup("profileImage"), "profileImagePath");
				if(typeof onFi1ValueChange == "function") {
					fileInput_1.addEventListener("value-change", onFi1ValueChange);
				}
				container.addChild(fileInput_1, {
					"top": "183px",
					"left": "12px",
					"width": "100px",
					"height": "20px"
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "3px",
				"left": "4px",
				"width": "470px",
				"height": "230px"
			});
			
			var group_2 = new cpr.controls.Container();
			group_2.style.setClasses(["main_layout1"]);
			group_2.style.css({
				"border-right-style" : "solid",
				"border-bottom-color" : "#bfbfbf",
				"border-left-style" : "solid",
				"border-left-color" : "#bfbfbf",
				"border-top-color" : "#bfbfbf",
				"border-bottom-style" : "solid",
				"border-right-color" : "#bfbfbf",
				"border-top-style" : "solid"
			});
			var xYLayout_3 = new cpr.controls.layouts.XYLayout();
			group_2.setLayout(xYLayout_3);
			(function(container){
				var hTMLSnippet_6 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_6.value = "<h3>근태정보<\/h3>";
				container.addChild(hTMLSnippet_6, {
					"top": "-5px",
					"left": "17px",
					"width": "150px",
					"height": "80px"
				});
				var button_1 = new cpr.controls.Button("Btn_workIn");
				button_1.value = "출근";
				button_1.style.setClasses(["btn_go"]);
				button_1.style.css({
					"border-radius" : "10px",
					"background-color" : "#E0E1E2",
					"background-image" : "none",
					"text-align" : "center"
				});
				if(typeof onButtonClick == "function") {
					button_1.addEventListener("click", onButtonClick);
				}
				container.addChild(button_1, {
					"right": "80px",
					"bottom": "10px",
					"width": "59px",
					"height": "50px"
				});
				var button_2 = new cpr.controls.Button("btn1");
				button_2.value = "퇴근";
				button_2.style.css({
					"border-radius" : "10px",
					"background-color" : "#F7EEEB",
					"font-weight" : "500",
					"background-image" : "none",
					"text-align" : "center"
				});
				if(typeof onButtonClick2 == "function") {
					button_2.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_2, {
					"bottom": "10px",
					"left": "538px",
					"width": "60px",
					"height": "50px"
				});
				var hTMLSnippet_7 = new cpr.controls.HTMLSnippet("user_clock");
				hTMLSnippet_7.value = " <div id=\"clock\">00:00<\/div>";
				hTMLSnippet_7.style.css({
					"font-weight" : "900",
					"font-size" : "30px"
				});
				if(typeof onUser_clockValueChange == "function") {
					hTMLSnippet_7.addEventListener("value-change", onUser_clockValueChange);
				}
				container.addChild(hTMLSnippet_7, {
					"top": "122px",
					"left": "17px",
					"width": "224px",
					"height": "47px"
				});
				var hTMLSnippet_8 = new cpr.controls.HTMLSnippet("day");
				hTMLSnippet_8.style.css({
					"color" : "#8A8989",
					"font-size" : "16px"
				});
				if(typeof onDayValueChange == "function") {
					hTMLSnippet_8.addEventListener("value-change", onDayValueChange);
				}
				container.addChild(hTMLSnippet_8, {
					"top": "85px",
					"left": "17px",
					"width": "228px",
					"height": "31px"
				});
				var hTMLSnippet_9 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_9.value = "<div>출근:<\/div>";
				container.addChild(hTMLSnippet_9, {
					"top": "194px",
					"left": "17px",
					"width": "48px",
					"height": "20px"
				});
				var hTMLSnippet_10 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_10.value = "<div>퇴근:<\/div>";
				container.addChild(hTMLSnippet_10, {
					"top": "194px",
					"left": "177px",
					"width": "48px",
					"height": "20px"
				});
				var hTMLSnippet_11 = new cpr.controls.HTMLSnippet("back");
				hTMLSnippet_11.value = "<span>기록없음<\/span>";
				container.addChild(hTMLSnippet_11, {
					"top": "194px",
					"left": "220px",
					"width": "100px",
					"height": "20px"
				});
				var hTMLSnippet_12 = new cpr.controls.HTMLSnippet("go");
				container.addChild(hTMLSnippet_12, {
					"top": "194px",
					"left": "54px",
					"width": "100px",
					"height": "20px"
				});
			})(group_2);
			container.addChild(group_2, {
				"top": "4px",
				"left": "494px",
				"width": "610px",
				"height": "230px"
			});
			
			var group_3 = new cpr.controls.Container();
			group_3.style.setClasses(["main_layout1"]);
			group_3.style.css({
				"border-right-style" : "solid",
				"border-bottom-color" : "#bfbfbf",
				"border-left-style" : "solid",
				"border-left-color" : "#bfbfbf",
				"border-top-color" : "#bfbfbf",
				"border-bottom-style" : "solid",
				"border-right-color" : "#bfbfbf",
				"border-top-style" : "solid"
			});
			var xYLayout_4 = new cpr.controls.layouts.XYLayout();
			group_3.setLayout(xYLayout_4);
			(function(container){
				var hTMLSnippet_13 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_13.value = "<h3>게시판<\/h3>";
				container.addChild(hTMLSnippet_13, {
					"top": "-4px",
					"left": "17px",
					"width": "150px",
					"height": "100px"
				});
			})(group_3);
			container.addChild(group_3, {
				"top": "4px",
				"right": "0px",
				"width": "458px",
				"height": "230px"
			});
			
			var group_4 = new cpr.controls.Container();
			group_4.style.setClasses(["main_layout1"]);
			group_4.style.css({
				"border-right-style" : "solid",
				"border-bottom-color" : "#bfbfbf",
				"border-left-style" : "solid",
				"border-left-color" : "#bfbfbf",
				"border-top-color" : "#bfbfbf",
				"border-bottom-style" : "solid",
				"border-right-color" : "#bfbfbf",
				"border-top-style" : "solid"
			});
			var xYLayout_5 = new cpr.controls.layouts.XYLayout();
			group_4.setLayout(xYLayout_5);
			(function(container){
				var hTMLSnippet_14 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_14.value = "<h3>일정<\/h3>";
				container.addChild(hTMLSnippet_14, {
					"top": "-3px",
					"left": "17px",
					"width": "150px",
					"height": "100px"
				});
			})(group_4);
			container.addChild(group_4, {
				"top": "334px",
				"right": "0px",
				"bottom": "0px",
				"width": "461px"
			});
			
			var group_5 = new cpr.controls.Container();
			group_5.style.setClasses(["main_layout1"]);
			group_5.style.css({
				"border-right-style" : "solid",
				"border-bottom-color" : "#bfbfbf",
				"border-left-style" : "solid",
				"border-left-color" : "#bfbfbf",
				"border-top-color" : "#bfbfbf",
				"border-bottom-style" : "solid",
				"border-right-color" : "#bfbfbf",
				"border-top-style" : "solid"
			});
			var xYLayout_6 = new cpr.controls.layouts.XYLayout();
			group_5.setLayout(xYLayout_6);
			(function(container){
				var tabFolder_1 = new cpr.controls.TabFolder();
				
				var tabItem_1 = (function(tabFolder){
					var tabItem_1 = new cpr.controls.TabItem();
					tabItem_1.text = "tab1";
					var group_6 = new cpr.controls.Container();
					var xYLayout_7 = new cpr.controls.layouts.XYLayout();
					group_6.setLayout(xYLayout_7);
					tabItem_1.content = group_6;
					return tabItem_1;
				})(tabFolder_1);
				tabFolder_1.addTabItem(tabItem_1);
				tabFolder_1.setSelectedTabItem(tabItem_1);
				container.addChild(tabFolder_1, {
					"top": "5px",
					"right": "0px",
					"bottom": "0px",
					"left": "0px"
				});
			})(group_5);
			container.addChild(group_5, {
				"top": "334px",
				"bottom": "0px",
				"left": "3px",
				"width": "470px"
			});
			
			var group_7 = new cpr.controls.Container();
			group_7.style.setClasses(["main_layout1"]);
			group_7.style.css({
				"border-right-style" : "solid",
				"border-bottom-color" : "#bfbfbf",
				"border-left-style" : "solid",
				"border-left-color" : "#bfbfbf",
				"border-top-color" : "#bfbfbf",
				"border-bottom-style" : "solid",
				"border-right-color" : "#bfbfbf",
				"border-top-style" : "solid"
			});
			var xYLayout_8 = new cpr.controls.layouts.XYLayout();
			group_7.setLayout(xYLayout_8);
			(function(container){
				var calendar_1 = new cpr.controls.Calendar();
				calendar_1.style.setClasses(["main-calendar"]);
				calendar_1.style.css({
					"background-image" : "none"
				});
				container.addChild(calendar_1, {
					"top": "0px",
					"right": "0px",
					"bottom": "0px",
					"left": "0px"
				});
			})(group_7);
			container.addChild(group_7, {
				"top": "334px",
				"bottom": "0px",
				"left": "494px",
				"width": "610px"
			});
			if(typeof onBodyPropertyChange == "function"){
				app.addEventListener("property-change", onBodyPropertyChange);
			}
			if(typeof onBodyHostChange2 == "function"){
				app.addEventListener("host-change", onBodyHostChange2);
			}
			if(typeof onBodyLoad2 == "function"){
				app.addEventListener("load", onBodyLoad2);
			}
			if(typeof onBodyUnload == "function"){
				app.addEventListener("unload", onBodyUnload);
			}
			if(typeof onBodyBeforeUnload == "function"){
				app.addEventListener("before-unload", onBodyBeforeUnload);
			}
			if(typeof onBodyInit2 == "function"){
				app.addEventListener("init", onBodyInit2);
			}
			if(typeof onBodyClick == "function"){
				app.getContainer().addEventListener("click", onBodyClick);
			}
		}
	});
	app.title = "MemberMain";
	cpr.core.Platform.INSTANCE.register(app);
})();
