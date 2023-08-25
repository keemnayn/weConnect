/*
 * App URI: register/Register
 * Source Location: register/Register.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("register/Register", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * register1.js
			 * Created at 2023. 8. 7. 오전 11:45:06.
			 *
			 * @author kjh970605
			 ************************************************/

			/*
			 * "확인" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e) {
				var button = e.control;
				app.lookup("registerSub").send();
			}

			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e) {
				let department = app.lookup("deparment");
				department.send();
			}

			/*
			 * "취소" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2(e) {
				var button = e.control;
				if (confirm("작성을 취소하시겠습니까?")) {
					window.location.href = "login";
				}
			}

			/*
			 * 서브미션에서 submit-error 이벤트 발생 시 호출.
			 * 통신 중 문제가 생기면 발생합니다.
			 */
			function onRegisterSubSubmitError(e) {
				var registerSub = e.control;
				alert("모든 정보를 입력해 주세요");
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onRegisterSubSubmitSuccess(e) {
				var registerSub = e.control;
				alert("회원가입 완료");
				window.location.href = "login";
			}

			/*
			 * "중복확인" 버튼(duplicateBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onDuplicateBtnClick(e) {
				var duplicateBtn = e.control;
				app.lookup("checkEmailSub").send();
			}

			/*
			 * 서브미션에서 submit-done 이벤트 발생 시 호출.
			 * 응답처리가 모두 종료되면 발생합니다.
			 */
			function onCheckEmailSubSubmitDone(e) {
				var checkEmailSub = e.control;
				var success = checkEmailSub.getMetadata("success");
				var message = checkEmailSub.getMetadata("message");
				alert(message);
				var memberEmailIpb = app.lookup("memberEmailIpb");
				
				if (!success) {
					memberEmailIpb.focus();
					memberEmailIpb.addEventListener("blur", forceFocus);
				} else {
					memberEmailIpb.removeEventListener("blur", forceFocus);
				}
			}

			// blur 이벤트 리스너 함수
			function forceFocus() {
				var memberEmailIpb = app.lookup("memberEmailIpb");
				setTimeout(() => {
					memberEmailIpb.focus();
				}, 1);
			}

			/*
			 * 인풋 박스에서 blur 이벤트 발생 시 호출.
			 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
			 */
			function onMemberEmailIpbBlur(e) {
				var memberEmailIpb = e.control;
				var emailValue = memberEmailIpb.value;
				var emailValidationOpb = app.lookup("emailValidationOpb");
				
				// 이메일 유효성 검사를 위한 정규 표현식
				var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
				
				if (!emailRegex.test(emailValue)) {
					emailValidationOpb.value = "유효하지 않은 이메일 형식입니다.";
					emailValidationOpb.style.css("color", "red");
					// 이메일 입력 박스에 포커스
					memberEmailIpb.focus();
				} else {
					// 정상 메시지를 표시
					emailValidationOpb.value = "정상적인 이메일 형식입니다.";
					emailValidationOpb.style.css("color", "blue");
				}
			}

			/*
			 * 인풋 박스에서 blur 이벤트 발생 시 호출.
			 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
			 */
			function onMemberNameBlur(e) {
				var memberName = e.control;
				var nameValue = memberName.value;
				var nameValidationOpb = app.lookup("nameValidationOpb"); // 이름 유효성 검사 결과를 표시하는 컨트롤
				
				var nameRegex = /^[가-힣ㄱ-ㅎㅏ-ㅣ]+$/;
				
				if (!nameRegex.test(nameValue)) {
					nameValidationOpb.value = "한글만 입력 가능합니다.";
					nameValidationOpb.style.css("color", "red");
					// 이름 입력 박스에 포커스
					memberName.focus();
				} else {
					// 정상 메시지를 표시
					nameValidationOpb.value = "정상적인 이름 형식입니다.";
					nameValidationOpb.style.css("color", "blue");
				}
			}

			/*
			 * 인풋 박스에서 blur 이벤트 발생 시 호출.
			 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
			 */
			function onPasswordIpbBlur(e) {
				var passwordIpb = e.control;
				var passwordValue = passwordIpb.value;
				var passwordValidationOpb = app.lookup("passwordValidationOpb");
				
				var passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
				
				if (!passwordRegex.test(passwordValue)) {
					passwordValidationOpb.value = "비밀번호는 8자리 이상이며, 최소 1개의 특수문자를 포함해야 합니다.";
					// 비밀번호 입력 박스에 포커스
					passwordValidationOpb.style.css("color", "red");
					passwordIpb.focus();
				} else {
					// 정상 메시지를 표시
					passwordValidationOpb.value = "정상적인 비밀번호 형식입니다.";
					passwordValidationOpb.style.css("color", "blue");
				}
			}

			/*
			 * 인풋 박스에서 blur 이벤트 발생 시 호출.
			 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
			 */
			function onCheckPasswordIpbBlur(e) {
				var checkPasswordIpb = e.control;
				var passwordCheckValidationOpb = app.lookup("passwordCheckValidationOpb");
				
				// 처음 입력한 비밀번호 필드 값을 가져옵니다.
				var passwordIpb = app.lookup("passwordIpb");
				var originalPassword = passwordIpb.value;
				
				var passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
				
				if (!passwordRegex.test(checkPasswordIpb.value)) {
					passwordCheckValidationOpb.value = "비밀번호는 8자리 이상이며, 최소 1개의 특수문자를 포함해야 합니다.";
					passwordCheckValidationOpb.style.css("color", "red");
					checkPasswordIpb.focus();
					return;
				}
				
				if (originalPassword !== checkPasswordIpb.value) {
					passwordCheckValidationOpb.value = "비밀번호가 일치하지 않습니다.";
					passwordCheckValidationOpb.style.css("color", "red");
					checkPasswordIpb.clear();
					checkPasswordIpb.focus();
				} else {
					passwordCheckValidationOpb.value = "비밀번호가 일치합니다.";
					passwordCheckValidationOpb.style.css("color", "blue");
				}
			}
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("departmentList");
			dataSet_1.parseData({
				"info": "selet",
				"columns": [
					{
						"name": "departmentId",
						"dataType": "string"
					},
					{
						"name": "departmentName",
						"dataType": "string"
					}
				],
				"rows": []
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("positionList");
			dataSet_2.parseData({
				"columns": [{
					"name": "position",
					"dataType": "string"
				}],
				"rows": [
					{"position": "사원"},
					{"position": "주임"},
					{"position": "대리"},
					{"position": "과장"}
				]
			});
			app.register(dataSet_2);
			
			var dataSet_3 = new cpr.data.DataSet("email");
			dataSet_3.parseData({});
			app.register(dataSet_3);
			var dataMap_1 = new cpr.data.DataMap("department1");
			dataMap_1.parseData({
				"columns" : [
					{
						"name": "departmentName",
						"dataType": "string"
					},
					{"name": "departmentId"}
				]
			});
			app.register(dataMap_1);
			
			var dataMap_2 = new cpr.data.DataMap("registerMemberParam");
			dataMap_2.parseData({
				"columns" : [
					{"name": "memberEmail"},
					{"name": "memberName"},
					{"name": "memberPassword"},
					{
						"name": "departmentId",
						"dataType": "number"
					},
					{"name": "position"}
				]
			});
			app.register(dataMap_2);
			var submission_1 = new cpr.protocols.Submission("memberList");
			submission_1.method = "post";
			submission_1.action = "";
			submission_1.addRequestData(dataSet_1);
			submission_1.addRequestData(dataMap_1);
			if(typeof onMemberListSubmitError == "function") {
				submission_1.addEventListener("submit-error", onMemberListSubmitError);
			}
			if(typeof onMemberListSubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onMemberListSubmitSuccess);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("deparment");
			submission_2.method = "get";
			submission_2.action = "member";
			submission_2.addRequestData(dataMap_1);
			submission_2.addResponseData(dataSet_1, false);
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("position");
			app.register(submission_3);
			
			var submission_4 = new cpr.protocols.Submission("registerSub");
			submission_4.action = "member";
			submission_4.addRequestData(dataMap_2);
			if(typeof onRegisterSubSubmitError == "function") {
				submission_4.addEventListener("submit-error", onRegisterSubSubmitError);
			}
			if(typeof onRegisterSubSubmitSuccess == "function") {
				submission_4.addEventListener("submit-success", onRegisterSubSubmitSuccess);
			}
			app.register(submission_4);
			
			var submission_5 = new cpr.protocols.Submission("checkEmailSub");
			submission_5.method = "get";
			submission_5.action = "member/check";
			submission_5.addRequestData(dataMap_2);
			if(typeof onCheckEmailSubSubmitDone == "function") {
				submission_5.addEventListener("submit-done", onCheckEmailSubSubmitDone);
			}
			app.register(submission_5);
			app.supportMedia("all and (min-width: 1928px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1927px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"background-image" : "none",
				"background-color" : "#F8F8F8",
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			group_1.style.setClasses(["cl-form-group1"]);
			group_1.style.css({
				"border-radius" : "30px",
				"background-color" : "#FEFEFF",
				"color" : "#FFFFFF",
				"background-image" : "none"
			});
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var hTMLSnippet_1 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_1.value = "<div>이메일<\/div>\r\n";
				hTMLSnippet_1.style.css({
					"color" : "#070000",
					"font-weight" : "bold",
					"font-size" : "16px",
					"font-family" : "sans-serif",
					"font-style" : "normal"
				});
				container.addChild(hTMLSnippet_1, {
					"top": "90px",
					"left": "195px",
					"width": "100px",
					"height": "30px"
				});
				var inputBox_1 = new cpr.controls.InputBox("memberEmailIpb");
				inputBox_1.placeholder = "이메일 주소는 ID로 사용됩니다.";
				inputBox_1.style.css({
					"border-radius" : "5px",
					"background-color" : "#FFFFF",
					"color" : "#000000",
					"font-weight" : "500",
					"font-style" : "normal",
					"background-image" : "none",
					"text-align" : "center"
				});
				var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("registerMemberParam"));
				inputBox_1.setBindContext(dataMapContext_1);
				inputBox_1.bind("value").toDataMap(app.lookup("registerMemberParam"), "memberEmail");
				if(typeof onMemberIdValueChange == "function") {
					inputBox_1.addEventListener("value-change", onMemberIdValueChange);
				}
				if(typeof onMemberEmailIpbInput == "function") {
					inputBox_1.addEventListener("input", onMemberEmailIpbInput);
				}
				if(typeof onMemberEmailIpbBlur == "function") {
					inputBox_1.addEventListener("blur", onMemberEmailIpbBlur);
				}
				container.addChild(inputBox_1, {
					"top": "120px",
					"left": "195px",
					"width": "350px",
					"height": "50px"
				});
				var button_1 = new cpr.controls.Button("duplicateBtn");
				button_1.value = "중복확인";
				button_1.style.setClasses(["button1"]);
				button_1.style.css({
					"background-color" : "#EBEBEB",
					"border-radius" : "5px",
					"color" : "#070000",
					"font-size" : "16px",
					"font-style" : "normal",
					"background-image" : "none",
					"text-align" : "center"
				});
				if(typeof onDuplicateBtnClick == "function") {
					button_1.addEventListener("click", onDuplicateBtnClick);
				}
				container.addChild(button_1, {
					"top": "120px",
					"left": "550px",
					"width": "100px",
					"height": "50px"
				});
				var hTMLSnippet_2 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_2.value = "<div>성명 <\/div>";
				hTMLSnippet_2.style.css({
					"color" : "#070000",
					"font-weight" : "bold",
					"font-size" : "16px",
					"font-family" : "sans-serif",
					"font-style" : "normal"
				});
				container.addChild(hTMLSnippet_2, {
					"top": "220px",
					"left": "195px",
					"width": "100px",
					"height": "30px"
				});
				var inputBox_2 = new cpr.controls.InputBox("memberName");
				inputBox_2.secret = false;
				inputBox_2.placeholder = "성명";
				inputBox_2.style.css({
					"border-radius" : "5px",
					"background-color" : "#FFFFFF",
					"color" : "#070000",
					"font-style" : "normal",
					"background-image" : "none",
					"text-align" : "center"
				});
				var dataMapContext_2 = new cpr.bind.DataMapContext(app.lookup("registerMemberParam"));
				inputBox_2.setBindContext(dataMapContext_2);
				inputBox_2.bind("value").toDataMap(app.lookup("registerMemberParam"), "memberName");
				if(typeof onMemberNameBlur == "function") {
					inputBox_2.addEventListener("blur", onMemberNameBlur);
				}
				container.addChild(inputBox_2, {
					"top": "250px",
					"left": "195px",
					"width": "350px",
					"height": "50px"
				});
				var hTMLSnippet_3 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_3.value = "<div>비밀번호 <\/div>";
				hTMLSnippet_3.style.css({
					"color" : "#070000",
					"font-weight" : "bold",
					"font-size" : "16px",
					"font-family" : "sans-serif",
					"font-style" : "normal"
				});
				container.addChild(hTMLSnippet_3, {
					"top": "350px",
					"left": "195px",
					"width": "100px",
					"height": "30px"
				});
				var inputBox_3 = new cpr.controls.InputBox("passwordIpb");
				inputBox_3.secret = true;
				inputBox_3.placeholder = "비밀번호";
				inputBox_3.style.css({
					"border-radius" : "5px",
					"background-color" : "#FFFFFF",
					"color" : "#070000",
					"font-style" : "normal",
					"background-image" : "none",
					"text-align" : "center"
				});
				var dataMapContext_3 = new cpr.bind.DataMapContext(app.lookup("registerMemberParam"));
				inputBox_3.setBindContext(dataMapContext_3);
				inputBox_3.bind("value").toDataMap(app.lookup("registerMemberParam"), "memberPassword");
				if(typeof onPasswordIpbBlur == "function") {
					inputBox_3.addEventListener("blur", onPasswordIpbBlur);
				}
				container.addChild(inputBox_3, {
					"top": "380px",
					"left": "195px",
					"width": "350px",
					"height": "50px"
				});
				var hTMLSnippet_4 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_4.value = "<div>비밀번호 확인<\/div>";
				hTMLSnippet_4.style.css({
					"color" : "#070000",
					"font-weight" : "bold",
					"font-size" : "16px",
					"font-family" : "sans-serif",
					"font-style" : "normal"
				});
				container.addChild(hTMLSnippet_4, {
					"top": "480px",
					"left": "195px",
					"width": "110px",
					"height": "30px"
				});
				var inputBox_4 = new cpr.controls.InputBox("checkPasswordIpb");
				inputBox_4.secret = true;
				inputBox_4.placeholder = "비밀번호 확인";
				inputBox_4.style.css({
					"border-radius" : "5px",
					"background-color" : "#FFFFFF",
					"color" : "#070000",
					"font-style" : "normal",
					"background-image" : "none",
					"text-align" : "center"
				});
				if(typeof onCheckPasswordIpbBlur == "function") {
					inputBox_4.addEventListener("blur", onCheckPasswordIpbBlur);
				}
				container.addChild(inputBox_4, {
					"top": "510px",
					"left": "195px",
					"width": "350px",
					"height": "50px"
				});
				var hTMLSnippet_5 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_5.value = "<div>부서<\/div>";
				hTMLSnippet_5.style.css({
					"color" : "#070000",
					"font-weight" : "bold",
					"font-size" : "16px",
					"font-family" : "sans-serif",
					"font-style" : "normal"
				});
				container.addChild(hTMLSnippet_5, {
					"top": "610px",
					"left": "195px",
					"width": "100px",
					"height": "30px"
				});
				var comboBox_1 = new cpr.controls.ComboBox("departmentCmb");
				comboBox_1.placeholder = "(선택)";
				comboBox_1.style.css({
					"background-color" : "#FFFFFF",
					"border-radius" : "5px",
					"color" : "#A0A0A0",
					"font-weight" : "500",
					"line-height" : "none",
					"text-align" : "left"
				});
				comboBox_1.style.button.css({
					"background-size" : "contain",
					"width" : "30px"
				});
				var dataMapContext_4 = new cpr.bind.DataMapContext(app.lookup("registerMemberParam"));
				comboBox_1.setBindContext(dataMapContext_4);
				comboBox_1.bind("value").toDataMap(app.lookup("registerMemberParam"), "departmentId");
				(function(comboBox_1){
					comboBox_1.addItem(new cpr.controls.Item("", "value3"));
					comboBox_1.setItemSet(app.lookup("departmentList"), {
						"label": "departmentName",
						"value": "departmentId"
					});
				})(comboBox_1);
				if(typeof onCmb2SelectionChange == "function") {
					comboBox_1.addEventListener("selection-change", onCmb2SelectionChange);
				}
				container.addChild(comboBox_1, {
					"top": "640px",
					"left": "194px",
					"width": "350px",
					"height": "50px"
				});
				var hTMLSnippet_6 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_6.value = "<div>직급<\/div>";
				hTMLSnippet_6.style.css({
					"color" : "#070000",
					"font-weight" : "bold",
					"font-size" : "16px",
					"font-family" : "sans-serif",
					"font-style" : "normal"
				});
				container.addChild(hTMLSnippet_6, {
					"top": "740px",
					"left": "195px",
					"width": "100px",
					"height": "30px"
				});
				var comboBox_2 = new cpr.controls.ComboBox("positionCmb");
				comboBox_2.placeholder = "(선택)";
				comboBox_2.style.css({
					"border-radius" : "5px",
					"color" : "#A0A0A0",
					"font-weight" : "500"
				});
				comboBox_2.style.button.css({
					"width" : "30px"
				});
				var dataMapContext_5 = new cpr.bind.DataMapContext(app.lookup("registerMemberParam"));
				comboBox_2.setBindContext(dataMapContext_5);
				comboBox_2.bind("value").toDataMap(app.lookup("registerMemberParam"), "position");
				(function(comboBox_2){
					comboBox_2.setItemSet(app.lookup("positionList"), {
						"label": "position",
						"value": "position"
					});
				})(comboBox_2);
				container.addChild(comboBox_2, {
					"top": "770px",
					"left": "195px",
					"width": "350px",
					"height": "50px"
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "확인";
				button_2.style.setClasses(["btn-success"]);
				button_2.style.css({
					"background-color" : "#4680FF",
					"color" : "#FFFFFF",
					"font-size" : "16px",
					"font-style" : "normal",
					"background-image" : "none",
					"text-align" : "center"
				});
				if(typeof onButtonClick == "function") {
					button_2.addEventListener("click", onButtonClick);
				}
				container.addChild(button_2, {
					"right": "395px",
					"bottom": "20px",
					"width": "150px",
					"height": "50px"
				});
				var button_3 = new cpr.controls.Button();
				button_3.value = "취소";
				button_3.style.setClasses(["btn-fail"]);
				button_3.style.css({
					"background-color" : "#929292",
					"color" : "#FFFFFF",
					"font-size" : "16px",
					"font-style" : "normal",
					"background-image" : "none",
					"text-align" : "center"
				});
				if(typeof onButtonClick2 == "function") {
					button_3.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_3, {
					"bottom": "20px",
					"left": "395px",
					"width": "150px",
					"height": "50px"
				});
				var output_1 = new cpr.controls.Output();
				output_1.value = "회원가입";
				output_1.style.css({
					"font-size" : "30px"
				});
				container.addChild(output_1, {
					"top": "20px",
					"left": "50px",
					"width": "120px",
					"height": "40px"
				});
				var output_2 = new cpr.controls.Output("emailValidationOpb");
				output_2.value = "";
				container.addChild(output_2, {
					"top": "185px",
					"left": "195px",
					"width": "350px",
					"height": "20px"
				});
				var output_3 = new cpr.controls.Output("nameValidationOpb");
				container.addChild(output_3, {
					"top": "315px",
					"left": "195px",
					"width": "350px",
					"height": "20px"
				});
				var output_4 = new cpr.controls.Output("passwordValidationOpb");
				container.addChild(output_4, {
					"top": "445px",
					"left": "195px",
					"width": "350px",
					"height": "20px"
				});
				var output_5 = new cpr.controls.Output("passwordCheckValidationOpb");
				container.addChild(output_5, {
					"top": "575px",
					"left": "195px",
					"width": "350px",
					"height": "20px"
				});
			})(group_1);
			if(typeof onGroupClick == "function") {
				group_1.addEventListener("click", onGroupClick);
			}
			container.addChild(group_1, {
				"top": "0px",
				"bottom": "0px",
				"left": "594px",
				"width": "740px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
		}
	});
	app.title = "Register";
	cpr.core.Platform.INSTANCE.register(app);
})();
