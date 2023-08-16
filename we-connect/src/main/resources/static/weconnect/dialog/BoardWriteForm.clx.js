/*
 * App URI: dialog/BoardWriteForm
 * Source Location: dialog/BoardWriteForm.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("dialog/BoardWriteForm", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * writeForm.js
			 * Created at 2023. 8. 14. 오후 3:43:26.
			 *
			 * @author chwec
			 ************************************************/

			/*
			 * "취소" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e){
				var button = e.control;
				app.close(false);
			};
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 1920px)", "Project");
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
			var group_1 = new cpr.controls.Container();
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
			group_1.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output();
				output_1.value = "내용";
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				container.addChild(inputBox_1, {
					"colIndex": 1,
					"rowIndex": 0
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "160px",
				"right": "20px",
				"bottom": "200px",
				"left": "20px"
			});
			
			var button_1 = new cpr.controls.Button();
			button_1.value = "취소";
			if(typeof onButtonClick == "function") {
				button_1.addEventListener("click", onButtonClick);
			}
			container.addChild(button_1, {
				"right": "280px",
				"bottom": "20px",
				"width": "100px",
				"height": "30px"
			});
			
			var button_2 = new cpr.controls.Button();
			button_2.value = "등록";
			container.addChild(button_2, {
				"bottom": "20px",
				"left": "280px",
				"width": "100px",
				"height": "30px"
			});
			
			var group_2 = new cpr.controls.Container();
			var formLayout_2 = new cpr.controls.layouts.FormLayout();
			formLayout_2.scrollable = false;
			formLayout_2.topMargin = "5px";
			formLayout_2.rightMargin = "5px";
			formLayout_2.bottomMargin = "5px";
			formLayout_2.leftMargin = "5px";
			formLayout_2.horizontalSpacing = "10px";
			formLayout_2.verticalSpacing = "10px";
			formLayout_2.setColumns(["1fr"]);
			formLayout_2.setRows(["1fr"]);
			group_2.setLayout(formLayout_2);
			(function(container){
				var output_2 = new cpr.controls.Output();
				output_2.value = "자유게시판";
				container.addChild(output_2, {
					"colIndex": 0,
					"rowIndex": 0
				});
			})(group_2);
			container.addChild(group_2, {
				"top": "30px",
				"right": "670px",
				"left": "20px",
				"height": "40px"
			});
			
			var group_3 = new cpr.controls.Container();
			var formLayout_3 = new cpr.controls.layouts.FormLayout();
			formLayout_3.scrollable = false;
			formLayout_3.topMargin = "5px";
			formLayout_3.rightMargin = "5px";
			formLayout_3.bottomMargin = "5px";
			formLayout_3.leftMargin = "5px";
			formLayout_3.horizontalSpacing = "10px";
			formLayout_3.verticalSpacing = "10px";
			formLayout_3.setColumns(["100px", "1fr"]);
			formLayout_3.setRows(["1fr"]);
			group_3.setLayout(formLayout_3);
			(function(container){
				var output_3 = new cpr.controls.Output();
				output_3.value = "제목";
				container.addChild(output_3, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var inputBox_2 = new cpr.controls.InputBox("ipb2");
				container.addChild(inputBox_2, {
					"colIndex": 1,
					"rowIndex": 0
				});
			})(group_3);
			container.addChild(group_3, {
				"top": "90px",
				"right": "20px",
				"left": "20px",
				"height": "50px"
			});
			
			var group_4 = new cpr.controls.Container();
			var formLayout_4 = new cpr.controls.layouts.FormLayout();
			formLayout_4.scrollable = false;
			formLayout_4.topMargin = "5px";
			formLayout_4.rightMargin = "5px";
			formLayout_4.bottomMargin = "5px";
			formLayout_4.leftMargin = "5px";
			formLayout_4.horizontalSpacing = "10px";
			formLayout_4.verticalSpacing = "10px";
			formLayout_4.setColumns(["100px", "1fr"]);
			formLayout_4.setRows(["1fr"]);
			group_4.setLayout(formLayout_4);
			(function(container){
				var output_4 = new cpr.controls.Output();
				output_4.value = "파일첨부";
				container.addChild(output_4, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var fileInput_1 = new cpr.controls.FileInput("fi1");
				container.addChild(fileInput_1, {
					"colIndex": 1,
					"rowIndex": 0
				});
			})(group_4);
			container.addChild(group_4, {
				"right": "20px",
				"bottom": "120px",
				"left": "20px",
				"height": "50px"
			});
		}
	});
	app.title = "글쓰기";
	cpr.core.Platform.INSTANCE.register(app);
})();
