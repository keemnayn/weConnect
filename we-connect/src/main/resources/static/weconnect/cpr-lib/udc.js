/// start - udc.adminHeader
/*
 * UDC Qualified Name: udc.adminHeader
 * App URI: udc/adminHeader
 * Source Location: udc/adminHeader.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/adminHeader", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * adminHeader.js
				 * Created at 2023. 8. 8. 오후 2:11:40.
				 *
				 * @author Axl Rose
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function(){
					// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
					return "";
				};;
				// End - User Script
				
				// Header
				app.supportMedia("all and (min-width: 1920px)", "new-screen");
				app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
				app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
				app.supportMedia("all and (max-width: 499px)", "mobile");
				
				// Configure root container
				var container = app.getContainer();
				container.style.css({
					"width" : "100%",
					"top" : "0px",
					"height" : "100%",
					"left" : "0px",
					"background-color" : "#F1EFFF"
				});
				
				// Layout
				var xYLayout_1 = new cpr.controls.layouts.XYLayout();
				container.setLayout(xYLayout_1);
				
				// UI Configuration
				var image_1 = new cpr.controls.Image();
				image_1.style.css({
					"background-image" : "url('img/enjoy.png')"
				});
				container.addChild(image_1, {
					"top": "5px",
					"left": "0px",
					"width": "300px",
					"height": "40px"
				});
				
				var output_1 = new cpr.controls.Output();
				output_1.value = "박해준";
				output_1.style.css({
					"font-size" : "20px"
				});
				container.addChild(output_1, {
					"top": "5px",
					"right": "160px",
					"width": "60px",
					"height": "40px"
				});
				
				var output_2 = new cpr.controls.Output();
				output_2.value = " 관리자님";
				output_2.style.css({
					"font-size" : "20px"
				});
				container.addChild(output_2, {
					"right": "70px",
					"width": "90px",
					"height": "40px",
					"top": "calc(50% - 20px)"
				});
			}
		});
	internalApp.title = "adminHeader";
	
	// Type declaration for adminHeader
	cpr.utils.Util.ensurePackage("udc").adminHeader = function(id){
		cpr.controls.UDCBase.call(this, "udc.adminHeader", internalApp, id);
	};
	
	udc.adminHeader.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.adminHeader.prototype, "type", {
		get : function(){
			return "udc.adminHeader";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.adminHeader
/// start - udc.adminMenu
/*
 * UDC Qualified Name: udc.adminMenu
 * App URI: udc/adminMenu
 * Source Location: udc/adminMenu.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/adminMenu", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * adminMenu.js
				 * Created at 2023. 8. 8. 오후 2:02:01.
				 *
				 * @author Axl Rose
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function(){
					// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
					return "";
				};;
				// End - User Script
				
				// Header
				var dataSet_1 = new cpr.data.DataSet("adminMenu");
				dataSet_1.parseData({
					"columns": [
						{"name": "label"},
						{"name": "value"},
						{"name": "parent"}
					],
					"rows": [
						{"label": "회원", "value": "회원", "parent": ""},
						{"label": "프로젝트", "value": "프로젝트", "parent": ""},
						{"label": "게시판", "value": "게시판", "parent": ""},
						{"label": "일정", "value": "일정", "parent": ""},
						{"label": "예약", "value": "예약", "parent": ""},
						{"label": "회원관리", "value": "회원관리", "parent": "회원"},
						{"label": "근태관리", "value": "근태관리", "parent": "회원"},
						{"label": "연차관리", "value": "연차관리", "parent": "회원"},
						{"label": "조직도", "value": "조직도", "parent": "회원"},
						{"label": "공지사항", "value": "공지사항", "parent": "게시판"},
						{"label": "자유게시판", "value": "자유게시판", "parent": "게시판"},
						{"label": "건의사항", "value": "건의사항", "parent": "게시판"},
						{"label": "회의실예약", "value": "회의실예약", "parent": "예약"},
						{"label": "일정관리", "value": "일정관리", "parent": "일정"},
						{"label": "프로젝트관리", "value": "프로젝트관리", "parent": "프로젝트"}
					]
				});
				app.register(dataSet_1);
				app.supportMedia("all and (min-width: 1920px)", "new-screen");
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
					"background-color" : "#F1EFFF"
				});
				(function(tree_1){
					tree_1.setItemSet(app.lookup("adminMenu"), {
						"label": "label",
						"value": "value",
						"parentValue": "parent"
					});
				})(tree_1);
				container.addChild(tree_1, {
					"top": "0px",
					"right": "0px",
					"bottom": "0px",
					"left": "0px"
				});
			}
		});
	internalApp.title = "adminMenu";
	
	// Type declaration for adminMenu
	cpr.utils.Util.ensurePackage("udc").adminMenu = function(id){
		cpr.controls.UDCBase.call(this, "udc.adminMenu", internalApp, id);
	};
	
	udc.adminMenu.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.adminMenu.prototype, "type", {
		get : function(){
			return "udc.adminMenu";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.adminMenu
/// start - udc.button
/*
 * UDC Qualified Name: udc.button
 * App URI: udc/button
 * Source Location: udc/button.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/button", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * button.js
				 * Created at 2023. 8. 8. 오후 3:14:14.
				 *
				 * @author Axl Rose
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function(){
					// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
					return "";
				};;
				// End - User Script
				
				// Header
				app.supportMedia("all and (min-width: 1920px)", "new-screen");
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
				container.setLayout(formLayout_1);
				
				// UI Configuration
				var button_1 = new cpr.controls.Button();
				button_1.value = "수정";
				container.addChild(button_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
				
				var button_2 = new cpr.controls.Button();
				button_2.value = "삭제";
				container.addChild(button_2, {
					"colIndex": 1,
					"rowIndex": 0
				});
				
				var button_3 = new cpr.controls.Button();
				button_3.value = "저장";
				container.addChild(button_3, {
					"colIndex": 2,
					"rowIndex": 0
				});
			}
		});
	internalApp.title = "button";
	
	// Type declaration for button
	cpr.utils.Util.ensurePackage("udc").button = function(id){
		cpr.controls.UDCBase.call(this, "udc.button", internalApp, id);
	};
	
	udc.button.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.button.prototype, "type", {
		get : function(){
			return "udc.button";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.button
/// start - udc.header
/*
 * UDC Qualified Name: udc.header
 * App URI: udc/header
 * Source Location: udc/header.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/header", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * header.js
				 * Created at 2023. 8. 7. 오후 2:06:54.
				 *
				 * @author Axl Rose
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function() {
					// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
					return "";
				};
	
				/*
				 * 이미지에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onImageClick(e) {
					var image = e.control;
					window.location = "#";
				}
				// End - User Script
				
				// Header
				app.supportMedia("all and (min-width: 1920px)", "new-screen");
				app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
				app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
				app.supportMedia("all and (max-width: 499px)", "mobile");
				
				// Configure root container
				var container = app.getContainer();
				container.style.css({
					"background-color" : "#E0E0E0",
					"width" : "100%",
					"top" : "0px",
					"height" : "100%",
					"left" : "0px"
				});
				
				// Layout
				var xYLayout_1 = new cpr.controls.layouts.XYLayout();
				container.setLayout(xYLayout_1);
				
				// UI Configuration
				var button_1 = new cpr.controls.Button();
				button_1.style.css({
					"border-radius" : "30%",
					"border-right-style" : "none",
					"border-left-style" : "none",
					"border-bottom-style" : "none",
					"background-image" : "url('img/header/logout.png')",
					"border-top-style" : "none"
				});
				container.addChild(button_1, {
					"top": "0px",
					"right": "20px",
					"width": "50px",
					"height": "50px"
				});
				
				var image_1 = new cpr.controls.Image();
				image_1.src = "img/enjoy.png";
				if(typeof onImageClick == "function") {
					image_1.addEventListener("click", onImageClick);
				}
				container.addChild(image_1, {
					"top": "5px",
					"left": "0px",
					"width": "300px",
					"height": "40px"
				});
				
				var button_2 = new cpr.controls.Button();
				button_2.style.css({
					"border-right-style" : "none",
					"border-left-style" : "none",
					"border-bottom-style" : "none",
					"background-image" : "url('img/header/profile.png')",
					"border-top-style" : "none"
				});
				container.addChild(button_2, {
					"top": "0px",
					"right": "90px",
					"bottom": "0px",
					"width": "50px"
				});
				
				var button_3 = new cpr.controls.Button();
				button_3.style.css({
					"border-right-style" : "none",
					"border-left-style" : "none",
					"border-bottom-style" : "none",
					"background-image" : "url('img/header/notification.png')",
					"border-top-style" : "none"
				});
				container.addChild(button_3, {
					"top": "0px",
					"right": "160px",
					"bottom": "1px",
					"width": "50px"
				});
				
				var button_4 = new cpr.controls.Button();
				button_4.style.css({
					"border-right-style" : "none",
					"border-left-style" : "none",
					"border-bottom-style" : "none",
					"background-image" : "url('img/header/login.png')",
					"border-top-style" : "none"
				});
				container.addChild(button_4, {
					"top": "0px",
					"right": "230px",
					"bottom": "1px",
					"width": "50px"
				});
			}
		});
	internalApp.title = "header";
	
	// Type declaration for header
	cpr.utils.Util.ensurePackage("udc").header = function(id){
		cpr.controls.UDCBase.call(this, "udc.header", internalApp, id);
	};
	
	udc.header.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.header.prototype, "type", {
		get : function(){
			return "udc.header";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.header
/// start - udc.left
/*
 * UDC Qualified Name: udc.left
 * App URI: udc/left
 * Source Location: udc/left.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/left", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * left.js
				 * Created at 2023. 8. 7. 오후 2:00:42.
				 *
				 * @author Axl Rose
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function() {
					// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
					return "";
				};
				// End - User Script
				
				// Header
				var dataSet_1 = new cpr.data.DataSet("menu");
				dataSet_1.parseData({
					"columns": [
						{"name": "label"},
						{"name": "value"},
						{"name": "icon"},
						{"name": "parent"}
					],
					"rows": [
						{"label": "근태", "value": "근태", "icon": "icon1", "parent": ""},
						{"label": "일정", "value": "일정", "icon": "icon2", "parent": ""},
						{"label": "예약", "value": "예약", "icon": "icon3", "parent": ""},
						{"label": "게시판", "value": "게시판", "icon": "icon4", "parent": ""},
						{"label": "출/퇴근", "value": "출/퇴근", "icon": "icon5", "parent": "근태"},
						{"label": "연차", "value": "연차", "icon": "icon6", "parent": "근태"},
						{"label": "프로젝트", "value": "프로젝트", "icon": "icon7", "parent": "일정"},
						{"label": "업무보드", "value": "업무보드", "icon": "icon8", "parent": "일정"},
						{"label": "회의실예약", "value": "회의실예약", "icon": "icon9", "parent": "예약"},
						{"label": "자유게시판", "value": "자유게시판", "icon": "icon10", "parent": "게시판"},
						{"label": "공지사항", "value": "공지사항", "icon": "icon11", "parent": "게시판"},
						{"label": "건의사항", "value": "건의사항", "icon": "icon12", "parent": "게시판"}
					]
				});
				app.register(dataSet_1);
				app.supportMedia("all and (min-width: 1920px)", "new-screen");
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
					"background-color" : "#E0E0E0"
				});
				(function(tree_1){
					tree_1.setItemSet(app.lookup("menu"), {
						"label": "label",
						"value": "value",
						"icon": "icon",
						"parentValue": "parent"
					});
				})(tree_1);
				container.addChild(tree_1, {
					"bottom": "0px",
					"left": "0px",
					"width": "300px",
					"height": "1030px"
				});
			}
		});
	internalApp.title = "left";
	
	// Type declaration for left
	cpr.utils.Util.ensurePackage("udc").left = function(id){
		cpr.controls.UDCBase.call(this, "udc.left", internalApp, id);
	};
	
	udc.left.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.left.prototype, "type", {
		get : function(){
			return "udc.left";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.left
/// start - udc.menu
/*
 * UDC Qualified Name: udc.menu
 * App URI: udc/menu
 * Source Location: udc/menu.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/menu", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * menu.js
				 * Created at 2023. 8. 7. 오후 3:37:16.
				 *
				 * @author kjh970605
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function(){
					// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
					return "";
				};;
				// End - User Script
				
				// Header
				var dataSet_1 = new cpr.data.DataSet("ds1");
				dataSet_1.parseData({
					"columns": [
						{"name": "label"},
						{"name": "value"},
						{"name": "icon"},
						{"name": "parent"}
					],
					"rows": [
						{"label": "프로젝트", "value": "프로젝트", "icon": "img/4.png", "parent": ""},
						{"label": "label2", "value": "value2", "icon": "icon4", "parent": ""},
						{"label": "개인프로젝트", "value": "개인프로젝트", "icon": "img/6.png", "parent": "프로젝트"},
						{"label": "팀프로젝트", "value": "팀프로젝트", "icon": "icon4", "parent": "프로젝트"},
						{"label": "캘린더", "value": "value5", "icon": "icon5", "parent": "value2"}
					]
				});
				app.register(dataSet_1);
				app.supportMedia("all and (min-width: 1920px)", "new-screen");
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
				var tabFolder_1 = new cpr.controls.TabFolder();
				
				var tabItem_1 = (function(tabFolder){
					var tabItem_1 = new cpr.controls.TabItem();
					tabItem_1.text = "tab1";
					var group_1 = new cpr.controls.Container();
					var xYLayout_2 = new cpr.controls.layouts.XYLayout();
					group_1.setLayout(xYLayout_2);
					tabItem_1.content = group_1;
					return tabItem_1;
				})(tabFolder_1);
				tabFolder_1.addTabItem(tabItem_1);
				tabFolder_1.setSelectedTabItem(tabItem_1);
				container.addChild(tabFolder_1, {
					"top": "312px",
					"left": "424px",
					"width": "0px",
					"height": "240px"
				});
				
				var tree_1 = new cpr.controls.Tree("tre1");
				(function(tree_1){
					tree_1.setItemSet(app.lookup("ds1"), {
						"label": "label",
						"value": "value",
						"icon": "icon",
						"parentValue": "parent"
					});
				})(tree_1);
				container.addChild(tree_1, {
					"top": "25px",
					"bottom": "-25px",
					"left": "0px",
					"width": "300px"
				});
			}
		});
	internalApp.title = "menu";
	
	// Type declaration for menu
	cpr.utils.Util.ensurePackage("udc").menu = function(id){
		cpr.controls.UDCBase.call(this, "udc.menu", internalApp, id);
	};
	
	udc.menu.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.menu.prototype, "type", {
		get : function(){
			return "udc.menu";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.menu
/// start - udc.search
/*
 * UDC Qualified Name: udc.search
 * App URI: udc/search
 * Source Location: udc/search.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/search", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
	
				/*
				 * "Search" 버튼에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onButtonClick(/* cpr.events.CMouseEvent */ e){
					var event = new cpr.events.CUIEvent("search");
					app.dispatchEvent(event);
				};
				// End - User Script
				
				// Header
				app.declareAppProperty("searchWord", null);
				app.supportMedia("all and (min-width: 1024px)", "default");
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
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				inputBox_1.bind("value").toAppProperty("searchWord");
				container.addChild(inputBox_1, {
					"top": "0px",
					"right": "90px",
					"bottom": "0px",
					"left": "0px"
				});
				
				var button_1 = new cpr.controls.Button();
				button_1.value = "Search";
				if(typeof onButtonClick == "function") {
					button_1.addEventListener("click", onButtonClick);
				}
				container.addChild(button_1, {
					"top": "0px",
					"right": "0px",
					"bottom": "0px",
					"width": "80px"
				});
			}
		});
	internalApp.title = "search";
	
	// Type declaration for search
	cpr.utils.Util.ensurePackage("udc").search = function(id){
		cpr.controls.UDCBase.call(this, "udc.search", internalApp, id);
	};
	
	udc.search.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.search.prototype, "type", {
		get : function(){
			return "udc.search";
		},
		
		configurable: true
	});
	
	// App Properties
	Object.defineProperty(udc.search.prototype, "searchWord", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("searchWord");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("searchWord", newValue, true);
		}
	});
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.search
/// start - udc.Untitled
/*
 * UDC Qualified Name: udc.Untitled
 * App URI: udc/Untitled
 * Source Location: udc/Untitled.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/Untitled", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * Untitled.js
				 * Created at 2023. 8. 7. 오후 3:06:44.
				 *
				 * @author kjh970605
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function(){
					// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
					return "";
				};;
				// End - User Script
				
				// Header
				app.supportMedia("all and (min-width: 1920px)", "new-screen");
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
				var group_1 = new cpr.controls.Container();
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_1.setLayout(xYLayout_2);
				(function(container){
					var hTMLSnippet_1 = new cpr.controls.HTMLSnippet();
					hTMLSnippet_1.value = "<a href=\"#\"><div>회원가입<\/div><\/a>";
					hTMLSnippet_1.style.css({
						"color" : "#FFFFFF"
					});
					container.addChild(hTMLSnippet_1, {
						"top": "3px",
						"left": "1587px",
						"width": "100px",
						"height": "23px"
					});
					var hTMLSnippet_2 = new cpr.controls.HTMLSnippet();
					hTMLSnippet_2.value = "<a href=\"#\"><div>ID/PW찾기<\/div><\/a>";
					hTMLSnippet_2.style.css({
						"color" : "#FFFFFF"
					});
					container.addChild(hTMLSnippet_2, {
						"top": "2px",
						"left": "1688px",
						"width": "100px",
						"height": "20px"
					});
					var button_1 = new cpr.controls.Button();
					button_1.value = "로그인";
					button_1.style.css({
						"background-color" : "#6091F7",
						"color" : "#FFFFFF"
					});
					container.addChild(button_1, {
						"top": "2px",
						"left": "1789px",
						"width": "100px",
						"height": "20px"
					});
					var hTMLSnippet_3 = new cpr.controls.HTMLSnippet();
					hTMLSnippet_3.value = "<img src=\"img/weConnect_logo.png\"alt=\"weConnect 로고 \"width=\"300px\" height=\"30px\"\">";
					hTMLSnippet_3.style.css({
						"color" : "#FFFFFF",
						"text-align" : "center"
					});
					container.addChild(hTMLSnippet_3, {
						"top": "0px",
						"left": "0px",
						"width": "353px",
						"height": "75px"
					});
				})(group_1);
				container.addChild(group_1, {
					"top": "1px",
					"left": "1px",
					"width": "1900px",
					"height": "100px"
				});
			}
		});
	internalApp.title = "Untitled";
	
	// Type declaration for Untitled
	cpr.utils.Util.ensurePackage("udc").Untitled = function(id){
		cpr.controls.UDCBase.call(this, "udc.Untitled", internalApp, id);
	};
	
	udc.Untitled.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.Untitled.prototype, "type", {
		get : function(){
			return "udc.Untitled";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.Untitled
/// start - udc.UserSide
/*
 * UDC Qualified Name: udc.UserSide
 * App URI: udc/UserSide
 * Source Location: udc/UserSide.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/UserSide", { 
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
				exports.getText = function(){
					// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
					return "";
				};
	
				/*
				 * 트리에서 item-click 이벤트 발생 시 호출.
				 * 아이템 클릭시 발생하는 이벤트.
				 */
				function onTre1ItemClick(/* cpr.events.CItemEvent */ e){
					/** 
					 * @type cpr.controls.Tree
					 */
					var tre1 = e.control;
					
					var vsAppId = e.item.row.getValue("appId");
					/*앱 아이디가 없는 경우 리턴합니다.*/
					if(vsAppId == ""){
						return;
					}
					
					var vcEmb = app.lookup("ea1");
					/*초기값 설정*/
					var voInitValue = {
						"value" : e.item.label,
						"appId" : vsAppId
					};
					/*앱을 로드하고 로드된 앱을 임베디드 앱에 설정합니다.*/
					cpr.core.App.load(vsAppId, function(/*cpr.core.App*/ loadedApp){
						/*임베디드앱에 안에 앱이 있는 경우에는 앱을 삭제해줍니다.(다시 앱을 열고싶을때 스크립트 작성)*/
						if(vcEmb.getEmbeddedAppInstance()){
							vcEmb.getEmbeddedAppInstance().dispose();
						}
						/*로드된 앱이 있는 경우에는 임베디드앱 안에 불러온 앱을 넣습니다.*/
						if(loadedApp){						
							/*초기값을 전달합니다.*/			
							vcEmb.ready(function(/*cpr.controls.EmbeddedApp*/embApp){
								embApp.initValue = voInitValue;
							})
							/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
							vcEmb.app = loadedApp;
						}
					}); 
				};
				// End - User Script
				
				// Header
				var dataSet_1 = new cpr.data.DataSet("userMenu");
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
						{"label": "홈", "value": "홈", "icon": "img/user/home.png", "parent": "", "appId": "user/userMain"},
						{"label": "근태", "value": "근태", "icon": "img/user/attendance.png", "parent": "", "appId": ""},
						{"label": "프로젝트", "value": "프로젝트", "icon": "img/user/project.png", "parent": "", "appId": ""},
						{"label": "예약", "value": "예약", "icon": "img/user/reservation.png", "parent": "", "appId": ""},
						{"label": "게시판", "value": "게시판", "icon": "img/user/board.png", "parent": "", "appId": ""},
						{"label": "출/퇴근 기록", "value": "출/퇴근 기록", "icon": "img/user/commute.png", "parent": "근태", "appId": "user/AttendFrom"},
						{"label": "연차신청", "value": "연차신청", "icon": "img/user/holiday.png", "parent": "근태", "appId": "user/HolidayRequestForm"},
						{"label": "일정", "value": "일정", "icon": "img/user/calender.png", "parent": "프로젝트", "appId": "project/Calendar1"},
						{"label": "업무보드", "value": "업무보드", "icon": "img/user/work_board.png", "parent": "프로젝트", "appId": ""},
						{"label": "회의실예약", "value": "회의실예약", "icon": "img/user/meeting_room.png", "parent": "예약", "appId": "user/MeetingRoomReservForm"},
						{"label": "자유게시판", "value": "자유게시판", "icon": "img/user/post.png", "parent": "게시판", "appId": "user/Board"},
						{"label": "공지사항", "value": "공지사항", "icon": "img/user/post.png", "parent": "게시판", "appId": "user/notice"},
						{"label": "건의사항", "value": "건의사항", "icon": "img/user/suggestions.png", "parent": "게시판"},
						{"label": "팀 페이지", "value": "팀프로젝트", "icon": "img/user/team.png", "parent": "업무보드", "appId": "project/teamBoard"},
						{"label": "개인페이지", "value": "개인프로젝트", "icon": "img/user/solo.png", "parent": "업무보드", "appId": "project/myBoard"}
					]
				});
				app.register(dataSet_1);
				app.supportMedia("all and (min-width: 1024px)", "default");
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
					tree_1.setItemSet(app.lookup("userMenu"), {
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
				container.addChild(embeddedApp_1, {
					"top": "70px",
					"right": "20px",
					"bottom": "70px",
					"left": "320px"
				});
			}
		});
	internalApp.title = "UserSide";
	
	// Type declaration for UserSide
	cpr.utils.Util.ensurePackage("udc").UserSide = function(id){
		cpr.controls.UDCBase.call(this, "udc.UserSide", internalApp, id);
	};
	
	udc.UserSide.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.UserSide.prototype, "type", {
		get : function(){
			return "udc.UserSide";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.UserSide
