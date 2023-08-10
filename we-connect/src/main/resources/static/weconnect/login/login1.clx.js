/*
 * App URI: login/login1
 * Source Location: login/login1.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("login/login1", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * Untitled.js
			 * Created at 2023. 8. 7. 오전 10:08:50.
			 *
			 * @author kjh970605
			 ************************************************/

			/*
			 * "회원가입" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e) {
				var button = e.control;
				window.location.href = "/register1.clx";
			};
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 1920px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"background-color" : "#F3F2F2",
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			group_1.style.setClasses(["login_layout"]);
			group_1.style.css({
				"border-right-style" : "solid",
				"border-radius" : "9px",
				"background-color" : "#DCDCDC",
				"border-left-style" : "solid",
				"vertical-align" : "middle",
				"border-bottom-style" : "solid",
				"border-top-style" : "solid"
			});
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				inputBox_1.placeholder = "아이디";
				inputBox_1.style.setClasses(["input_id"]);
				inputBox_1.style.css({
					"border-radius" : "8px",
					"background-color" : "#FFFFFF",
					"color" : "#FFFFFF",
					"font-size" : "1em",
					"text-align" : "left"
				});
				container.addChild(inputBox_1, {
					"top": "164px",
					"left": "90px",
					"width": "420px",
					"height": "50px"
				});
				var inputBox_2 = new cpr.controls.InputBox("ipb2");
				inputBox_2.placeholder = "비밀번호";
				inputBox_2.style.setClasses(["input_password"]);
				inputBox_2.style.css({
					"border-radius" : "8px",
					"background-color" : "#FFFFFF",
					"color" : "#FFFFFF",
					"font-size" : "1em",
					"text-align" : "left"
				});
				container.addChild(inputBox_2, {
					"top": "225px",
					"left": "90px",
					"width": "420px",
					"height": "50px"
				});
				var button_1 = new cpr.controls.Button();
				button_1.value = "로그인";
				button_1.style.setClasses(["btn_login"]);
				button_1.style.css({
					"background-color" : "#4680FF",
					"border-radius" : "8px",
					"color" : "#FFFFFF",
					"font-weight" : "600",
					"font-size" : "16px",
					"background-image" : "none"
				});
				container.addChild(button_1, {
					"top": "334px",
					"left": "90px",
					"width": "420px",
					"height": "39px"
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "회원가입";
				button_2.style.setClasses(["btn_register"]);
				button_2.style.css({
					"background-color" : "#4D5B67",
					"border-radius" : "8px",
					"color" : "#FFFFFF",
					"font-weight" : "600",
					"font-size" : "16px"
				});
				if(typeof onButtonClick == "function") {
					button_2.addEventListener("click", onButtonClick);
				}
				container.addChild(button_2, {
					"top": "385px",
					"left": "90px",
					"width": "420px",
					"height": "40px"
				});
				var hTMLSnippet_1 = new cpr.controls.HTMLSnippet();
				hTMLSnippet_1.value = "<a href=\"#\"  class=\"password-_reset\">비밀번호 찾기<\/a>";
				hTMLSnippet_1.style.setClasses(["password_reset"]);
				hTMLSnippet_1.style.css({
					"color" : "#5B6B79",
					"font-weight" : "400",
					"font-size" : "15px"
				});
				container.addChild(hTMLSnippet_1, {
					"top": "280px",
					"right": "10px",
					"left": "428px",
					"height": "20px"
				});
				var image_1 = new cpr.controls.Image();
				image_1.src = "img/enjoy.png";
				container.addChild(image_1, {
					"top": "49px",
					"left": "93px",
					"width": "411px",
					"height": "80px"
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "210px",
				"left": "652px",
				"width": "600px",
				"height": "500px"
			});
			if(typeof onBodyInit2 == "function"){
				app.addEventListener("init", onBodyInit2);
			}
		}
	});
	app.title = "login1";
	cpr.core.Platform.INSTANCE.register(app);
})();
