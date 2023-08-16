/*
 * App URI: member/project/TeamPost
 * Source Location: member/project/TeamPost.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("member/project/TeamPost", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * detail.js
			 * Created at 2023. 8. 7. 오전 10:08:05.
			 *
			 * @author keemn
			 ************************************************/;
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("teamPost");
			dataSet_1.parseData({
				"columns": [
					{"name": "teamPostNo"},
					{"name": "memberName"},
					{
						"name": "teamPostTitle",
						"dataType": "string"
					},
					{"name": "date"},
					{"name": "teamPostContent"},
					{"name": "departmentName"}
				],
				"rows": [{"teamPostNo": "1", "memberName": "nana", "teamPostTitle": "새 소식", "date": "2023-08-16", "teamPostContent": "hohoho", "departmentName": "develop"}]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("comment");
			dataSet_2.parseData({
				"columns": [
					{"name": "memberId"},
					{"name": "memberName"},
					{"name": "teamPostComment"},
					{"name": "date"}
				],
				"rows": [{"memberId": "1", "memberName": "gaga", "teamPostComment": "확인했습니다!", "date": "2023-08-18"}]
			});
			app.register(dataSet_2);
			var submission_1 = new cpr.protocols.Submission("sms1");
			app.register(submission_1);
			app.supportMedia("all and (min-width: 1920px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"border-bottom-style" : "none",
				"border-top-style" : "none",
				"border-right-style" : "none",
				"width" : "100%",
				"height" : "100%",
				"border-left-style" : "none"
			});
			
			// Layout
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			container.setLayout(responsiveXYLayout_1);
			
			// UI Configuration
			var textArea_1 = new cpr.controls.TextArea("txa1");
			textArea_1.style.css({
				"border-right-style" : "none",
				"border-left-style" : "none",
				"border-bottom-style" : "none",
				"font-family" : "IBM Plex Sans KR",
				"border-top-style" : "none"
			});
			var dataRowContext_1 = new cpr.bind.DataRowContext(app.lookup("teamPost"), 0);
			textArea_1.setBindContext(dataRowContext_1);
			textArea_1.bind("value").toDataColumn("teamPostContent");
			container.addChild(textArea_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "178px",
						"left": "20px",
						"width": "1540px",
						"height": "170px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "178px",
						"left": "20px",
						"width": "1540px",
						"height": "170px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "178px",
						"left": "10px",
						"width": "752px",
						"height": "170px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "178px",
						"left": "7px",
						"width": "526px",
						"height": "170px"
					}
				]
			});
			
			var inputBox_1 = new cpr.controls.InputBox("ipb1");
			inputBox_1.placeholder = "댓글 달기";
			inputBox_1.style.css({
				"border-right-style" : "none",
				"color" : "#7D7878",
				"border-bottom-color" : "#ffffff",
				"border-left-style" : "none",
				"border-left-color" : "#ffffff",
				"border-top-color" : "#ffffff",
				"border-bottom-style" : "none",
				"border-right-color" : "#ffffff",
				"font-family" : "IBM Plex Sans KR",
				"border-top-style" : "none"
			});
			container.addChild(inputBox_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "402px",
						"left": "20px",
						"width": "970px",
						"height": "80px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "402px",
						"left": "20px",
						"width": "970px",
						"height": "80px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "402px",
						"left": "10px",
						"width": "474px",
						"height": "80px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "402px",
						"left": "7px",
						"width": "332px",
						"height": "80px"
					}
				]
			});
			
			var hTMLSnippet_1 = new cpr.controls.HTMLSnippet();
			hTMLSnippet_1.style.css({
				"border-right-style" : "none",
				"color" : "#010101",
				"border-bottom-color" : "#686565",
				"font-weight" : "normal",
				"border-left-color" : "#686565",
				"font-size" : "14px",
				"border-right-color" : "#686565",
				"font-style" : "normal",
				"border-top-style" : "none",
				"border-left-style" : "none",
				"border-top-color" : "#686565",
				"font-family" : "IBM Plex Sans KR",
				"border-bottom-style" : "none",
				"text-align" : "right"
			});
			hTMLSnippet_1.bind("value").toDataSet(app.lookup("teamPost"), "departmentName", 0);
			container.addChild(hTMLSnippet_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "110px",
						"left": "945px",
						"width": "100px",
						"height": "30px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "110px",
						"left": "945px",
						"width": "100px",
						"height": "30px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "110px",
						"left": "461px",
						"width": "49px",
						"height": "30px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "110px",
						"left": "323px",
						"width": "34px",
						"height": "30px"
					}
				]
			});
			
			var button_1 = new cpr.controls.Button();
			button_1.value = "등록";
			button_1.style.css({
				"font-family" : "IBM Plex Sans KR"
			});
			container.addChild(button_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "422px",
						"left": "1001px",
						"width": "45px",
						"height": "40px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "422px",
						"left": "1001px",
						"width": "45px",
						"height": "40px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "422px",
						"left": "489px",
						"width": "22px",
						"height": "40px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "422px",
						"left": "342px",
						"width": "15px",
						"height": "40px"
					}
				]
			});
			
			var image_1 = new cpr.controls.Image();
			image_1.src = "img/member/attach-file.png";
			image_1.style.css({
				"font-family" : "IBM Plex Sans KR"
			});
			container.addChild(image_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "383px",
						"left": "1001px",
						"width": "20px",
						"height": "20px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "383px",
						"left": "1001px",
						"width": "20px",
						"height": "20px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "383px",
						"left": "489px",
						"width": "10px",
						"height": "20px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "383px",
						"left": "342px",
						"width": "7px",
						"height": "20px"
					}
				]
			});
			
			var image_2 = new cpr.controls.Image();
			image_2.src = "img/member/bookmark-white.png";
			image_2.style.css({
				"font-family" : "IBM Plex Sans KR"
			});
			container.addChild(image_2, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "383px",
						"left": "1026px",
						"width": "20px",
						"height": "20px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "383px",
						"left": "1026px",
						"width": "20px",
						"height": "20px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "383px",
						"left": "501px",
						"width": "10px",
						"height": "20px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "383px",
						"left": "351px",
						"width": "7px",
						"height": "20px"
					}
				]
			});
			
			var output_1 = new cpr.controls.Output();
			output_1.style.css({
				"font-weight" : "bold",
				"font-size" : "30px"
			});
			var dataRowContext_2 = new cpr.bind.DataRowContext(app.lookup("teamPost"), 0);
			output_1.setBindContext(dataRowContext_2);
			output_1.bind("value").toDataColumn("teamPostTitle");
			container.addChild(output_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "20px",
						"right": "40px",
						"left": "20px",
						"height": "50px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "20px",
						"right": "40px",
						"left": "20px",
						"height": "50px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "20px",
						"right": "20px",
						"left": "10px",
						"height": "50px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "20px",
						"right": "14px",
						"left": "7px",
						"height": "50px"
					}
				]
			});
			
			var output_2 = new cpr.controls.Output();
			var dataRowContext_3 = new cpr.bind.DataRowContext(app.lookup("teamPost"), 0);
			output_2.setBindContext(dataRowContext_3);
			output_2.bind("value").toDataColumn("memberName");
			container.addChild(output_2, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "109px",
						"left": "20px",
						"width": "100px",
						"height": "30px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "109px",
						"left": "20px",
						"width": "100px",
						"height": "30px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "109px",
						"left": "10px",
						"width": "49px",
						"height": "30px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "109px",
						"left": "7px",
						"width": "34px",
						"height": "30px"
					}
				]
			});
			
			var output_3 = new cpr.controls.Output();
			var dataRowContext_4 = new cpr.bind.DataRowContext(app.lookup("teamPost"), 0);
			output_3.setBindContext(dataRowContext_4);
			output_3.bind("value").toDataColumn("date");
			container.addChild(output_3, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "109px",
						"left": "119px",
						"width": "220px",
						"height": "30px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "109px",
						"left": "119px",
						"width": "220px",
						"height": "30px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "109px",
						"left": "58px",
						"width": "107px",
						"height": "30px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "109px",
						"left": "41px",
						"width": "75px",
						"height": "30px"
					}
				]
			});
			
			var group_1 = new cpr.controls.Container();
			group_1.style.css({
				"background-color" : "#FFFFE1",
				"border-radius" : "20px"
			});
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_1);
			(function(container){
				var output_4 = new cpr.controls.Output();
				output_4.bind("value").toDataSet(app.lookup("comment"), "memberName", 0);
				container.addChild(output_4, {
					"top": "20px",
					"left": "20px",
					"width": "100px",
					"height": "30px"
				});
				var output_5 = new cpr.controls.Output();
				output_5.style.css({
					"border-radius" : "20px"
				});
				output_5.bind("value").toDataSet(app.lookup("comment"), "teamPostComment", 0);
				container.addChild(output_5, {
					"top": "49px",
					"left": "20px",
					"width": "983px",
					"height": "168px"
				});
				var output_6 = new cpr.controls.Output();
				output_6.bind("value").toDataSet(app.lookup("comment"), "date", 0);
				container.addChild(output_6, {
					"top": "20px",
					"left": "119px",
					"width": "100px",
					"height": "30px"
				});
			})(group_1);
			container.addChild(group_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "491px",
						"left": "20px",
						"width": "1024px",
						"height": "238px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "491px",
						"left": "20px",
						"width": "1024px",
						"height": "238px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "491px",
						"left": "10px",
						"width": "500px",
						"height": "238px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "491px",
						"left": "7px",
						"width": "350px",
						"height": "238px"
					}
				]
			});
		}
	});
	app.title = "TeamPost";
	cpr.core.Platform.INSTANCE.register(app);
})();
