/// start - udc.FreeBoardCommentUdc
/*
 * UDC Qualified Name: udc.FreeBoardCommentUdc
 * App URI: udc/FreeBoardCommentUdc
 * Source Location: udc/FreeBoardCommentUdc.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/FreeBoardCommentUdc", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * FreeBoardCommentUbc.js
				 * Created at 2023. 8. 24. 오전 10:42:12.
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
				 * "수정" 버튼에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onButtonClick(e){
					var button = e.control;
					var event = new cpr.events.CAppEvent("updateClick");
					app.dispatchEvent(event);
					
				}
	
				/*
				 * "삭제" 버튼에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onButtonClick2(e){
					var button = e.control;
					var event = new cpr.events.CAppEvent("deleteClick");
					app.dispatchEvent(event);
				};
				// End - User Script
				
				// Header
				app.declareAppProperty("memberName", null);
				app.declareAppProperty("freeBoardCommentDate", null);
				app.declareAppProperty("freeBoardCommentContent", null);
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
				var output_1 = new cpr.controls.Output();
				output_1.value = "Output";
				container.addChild(output_1, {
					"top": "40px",
					"left": "0px",
					"width": "1560px",
					"height": "60px"
				});
				
				var output_2 = new cpr.controls.Output();
				output_2.value = "Output";
				container.addChild(output_2, {
					"top": "10px",
					"left": "0px",
					"width": "100px",
					"height": "30px"
				});
				
				var output_3 = new cpr.controls.Output();
				output_3.value = "Output";
				container.addChild(output_3, {
					"top": "20px",
					"left": "100px",
					"width": "150px",
					"height": "20px"
				});
				
				var button_1 = new cpr.controls.Button();
				button_1.value = "삭제";
				if(typeof onButtonClick2 == "function") {
					button_1.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_1, {
					"top": "20px",
					"right": "0px",
					"width": "100px",
					"height": "20px"
				});
				
				var button_2 = new cpr.controls.Button();
				button_2.value = "수정";
				if(typeof onButtonClick == "function") {
					button_2.addEventListener("click", onButtonClick);
				}
				container.addChild(button_2, {
					"top": "20px",
					"right": "100px",
					"width": "100px",
					"height": "20px"
				});
			}
		});
	internalApp.title = "FreeBoardCommentUdc";
	
	// Type declaration for FreeBoardCommentUdc
	cpr.utils.Util.ensurePackage("udc").FreeBoardCommentUdc = function(id){
		cpr.controls.UDCBase.call(this, "udc.FreeBoardCommentUdc", internalApp, id);
	};
	
	udc.FreeBoardCommentUdc.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.FreeBoardCommentUdc.prototype, "type", {
		get : function(){
			return "udc.FreeBoardCommentUdc";
		},
		
		configurable: true
	});
	
	// App Properties
	Object.defineProperty(udc.FreeBoardCommentUdc.prototype, "memberName", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("memberName");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("memberName", newValue, true);
		}
	});
	Object.defineProperty(udc.FreeBoardCommentUdc.prototype, "freeBoardCommentDate", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("freeBoardCommentDate");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("freeBoardCommentDate", newValue, true);
		}
	});
	Object.defineProperty(udc.FreeBoardCommentUdc.prototype, "freeBoardCommentContent", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("freeBoardCommentContent");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("freeBoardCommentContent", newValue, true);
		}
	});
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.FreeBoardCommentUdc
/// start - udc.myPostList
/*
 * UDC Qualified Name: udc.myPostList
 * App URI: udc/myPostList
 * Source Location: udc/myPostList.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/myPostList", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * myPostList.js
				 * Created at 2023. 8. 24. 오후 4:14:14.
				 *
				 * @author keemn
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
				var group_1 = new cpr.controls.Container();
				group_1.style.css({
					"background-color" : "#D7E4F2",
					"border-radius" : "20px"
				});
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_1.setLayout(xYLayout_2);
				(function(container){
					var output_1 = new cpr.controls.Output();
					output_1.value = "myPostTitle";
					container.addChild(output_1, {
						"top": "20px",
						"left": "20px",
						"width": "220px",
						"height": "20px"
					});
					var output_2 = new cpr.controls.Output();
					output_2.value = "myPostContent";
					container.addChild(output_2, {
						"top": "50px",
						"left": "20px",
						"width": "220px",
						"height": "254px"
					});
				})(group_1);
				container.addChild(group_1, {
					"top": "20px",
					"left": "20px",
					"width": "260px",
					"height": "324px"
				});
			}
		});
	internalApp.title = "myPostList";
	
	// Type declaration for myPostList
	cpr.utils.Util.ensurePackage("udc").myPostList = function(id){
		cpr.controls.UDCBase.call(this, "udc.myPostList", internalApp, id);
	};
	
	udc.myPostList.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.myPostList.prototype, "type", {
		get : function(){
			return "udc.myPostList";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.myPostList
/// start - udc.TeamPostUdc
/*
 * UDC Qualified Name: udc.TeamPostUdc
 * App URI: udc/TeamPostUdc
 * Source Location: udc/TeamPostUdc.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/TeamPostUdc", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * TeamPostUdc.js
				 * Created at 2023. 8. 25. 오후 12:21:20.
				 *
				 * @author keemn
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function() {
					// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
					return "";
				};
	
				/*
				 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
				 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
				 */
				function onBodyLoad(e) {
					app.lookup("name").text = app.getAppProperty("name");
					app.lookup("date").text = app.getAppProperty("date");
					app.lookup("title").text = app.getAppProperty("title");
					app.lookup("content").text = app.getAppProperty("content");
					app.lookup("department").text = app.getAppProperty("department");
				}
				// End - User Script
				
				// Header
				app.declareAppProperty("name", null);
				app.declareAppProperty("date", null);
				app.declareAppProperty("title", null);
				app.declareAppProperty("content", null);
				app.declareAppProperty("department", null);
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
				var group_1 = new cpr.controls.Container();
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_1.setLayout(xYLayout_2);
				(function(container){
					var output_1 = new cpr.controls.Output("name");
					output_1.value = "memberName";
					container.addChild(output_1, {
						"top": "19px",
						"left": "19px",
						"width": "100px",
						"height": "30px"
					});
					var output_2 = new cpr.controls.Output("date");
					output_2.value = "teamPostCreateDate";
					container.addChild(output_2, {
						"top": "19px",
						"left": "128px",
						"width": "220px",
						"height": "30px"
					});
					var textArea_1 = new cpr.controls.TextArea("content");
					textArea_1.value = "teamPostContent";
					textArea_1.style.css({
						"border-right-style" : "none",
						"border-left-style" : "none",
						"border-bottom-style" : "none",
						"font-family" : "IBM Plex Sans KR",
						"border-top-style" : "none"
					});
					container.addChild(textArea_1, {
						"top": "100px",
						"left": "19px",
						"width": "1520px",
						"height": "150px"
					});
					var output_3 = new cpr.controls.Output("title");
					output_3.value = "teamPostTitle";
					container.addChild(output_3, {
						"top": "57px",
						"left": "18px",
						"width": "1520px",
						"height": "30px"
					});
					var output_4 = new cpr.controls.Output("department");
					output_4.value = "department";
					container.addChild(output_4, {
						"top": "19px",
						"left": "1368px",
						"width": "150px",
						"height": "30px"
					});
				})(group_1);
				container.addChild(group_1, {
					"top": "10px",
					"left": "10px",
					"width": "1540px",
					"height": "260px"
				});
				if(typeof onBodyLoad == "function"){
					app.addEventListener("load", onBodyLoad);
				}
			}
		});
	internalApp.title = "TeamPostUdc";
	
	// Type declaration for TeamPostUdc
	cpr.utils.Util.ensurePackage("udc").TeamPostUdc = function(id){
		cpr.controls.UDCBase.call(this, "udc.TeamPostUdc", internalApp, id);
	};
	
	udc.TeamPostUdc.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.TeamPostUdc.prototype, "type", {
		get : function(){
			return "udc.TeamPostUdc";
		},
		
		configurable: true
	});
	
	// App Properties
	Object.defineProperty(udc.TeamPostUdc.prototype, "name", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("name");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("name", newValue, true);
		}
	});
	Object.defineProperty(udc.TeamPostUdc.prototype, "date", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("date");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("date", newValue, true);
		}
	});
	Object.defineProperty(udc.TeamPostUdc.prototype, "title", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("title");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("title", newValue, true);
		}
	});
	Object.defineProperty(udc.TeamPostUdc.prototype, "content", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("content");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("content", newValue, true);
		}
	});
	Object.defineProperty(udc.TeamPostUdc.prototype, "department", {
		get: function(){
			return this.getEmbeddedAppInstance().getAppProperty("department");
		},
		set: function(newValue){
			return this.getEmbeddedAppInstance().setAppProperty("department", newValue, true);
		}
	});
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.TeamPostUdc
