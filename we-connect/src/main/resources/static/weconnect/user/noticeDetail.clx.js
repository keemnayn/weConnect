/*
 * App URI: user/NoticeDetail
 * Source Location: user/NoticeDetail.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("user/NoticeDetail", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * noticeDetail.js
			 * Created at 2023. 8. 5. 오후 7:57:23.
			 *
			 * @author Axl Rose
			 ************************************************/;
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("ds1");
			dataSet_1.parseData({
				"columns": [
					{"name": "title"},
					{"name": "type"},
					{"name": "date"},
					{"name": "content"}
				],
				"rows": [{"title": "공지합니다", "type": "점검", "date": "2023-08-05", "content": "공지할게요"}]
			});
			app.register(dataSet_1);
			app.supportMedia("all and (min-width: 1920px)", "Project");
			app.supportMedia("all and (min-width: 1920px) and (max-width: 1919px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
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
			var output_1 = new cpr.controls.Output();
			output_1.style.css({
				"font-weight" : "bold",
				"font-size" : "30px"
			});
			var dataRowContext_1 = new cpr.bind.DataRowContext(app.lookup("ds1"), 0);
			output_1.setBindContext(dataRowContext_1);
			output_1.bind("value").toDataColumn("title");
			container.addChild(output_1, {
				"top": "6px",
				"right": "380px",
				"left": "20px",
				"height": "50px"
			});
			
			var output_2 = new cpr.controls.Output();
			output_2.style.css({
				"vertical-align" : "top",
				"font-size" : "25px"
			});
			var dataRowContext_2 = new cpr.bind.DataRowContext(app.lookup("ds1"), 0);
			output_2.setBindContext(dataRowContext_2);
			output_2.bind("value").toDataColumn("content");
			container.addChild(output_2, {
				"top": "186px",
				"right": "380px",
				"bottom": "144px",
				"left": "20px"
			});
			
			var output_3 = new cpr.controls.Output();
			output_3.style.css({
				"font-size" : "20px"
			});
			var dataRowContext_3 = new cpr.bind.DataRowContext(app.lookup("ds1"), 0);
			output_3.setBindContext(dataRowContext_3);
			output_3.bind("value").toDataColumn("date");
			container.addChild(output_3, {
				"top": "106px",
				"left": "20px",
				"width": "200px",
				"height": "50px"
			});
			
			var output_4 = new cpr.controls.Output();
			output_4.style.css({
				"font-size" : "20px"
			});
			var dataRowContext_4 = new cpr.bind.DataRowContext(app.lookup("ds1"), 0);
			output_4.setBindContext(dataRowContext_4);
			output_4.bind("value").toDataColumn("type");
			container.addChild(output_4, {
				"top": "106px",
				"left": "270px",
				"width": "100px",
				"height": "50px"
			});
			
			var hTMLSnippet_1 = new cpr.controls.HTMLSnippet();
			hTMLSnippet_1.value = "<hr>";
			container.addChild(hTMLSnippet_1, {
				"top": "156px",
				"left": "20px",
				"width": "1520px",
				"height": "10px"
			});
		}
	});
	app.title = "NoticeDetail";
	cpr.core.Platform.INSTANCE.register(app);
})();
