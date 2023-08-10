/*
 * App URI: user/udc/adminHeader
 * Source Location: user/udc/adminHeader.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("user/udc/adminHeader", { 
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
				"background-image" : "url('user/img/enjoy.png')"
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
	app.title = "adminHeader";
	cpr.core.Platform.INSTANCE.register(app);
})();
