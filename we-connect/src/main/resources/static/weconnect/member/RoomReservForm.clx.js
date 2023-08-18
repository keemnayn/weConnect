/*
 * App URI: member/RoomReservForm
 * Source Location: member/RoomReservForm.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("member/RoomReservForm", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * MeetingRoomReserv.js
			 * Created at 2023. 8. 8. 오후 8:11:24.
			 *
			 * @author chwec
			 ************************************************/

			/*
			 * "신청" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e){
				var button = e.control;
				var submission = app.lookup("roomReservSub").send();
			}

			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e){
				app.lookup("roomInfoSub").send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onRoomReservSubSubmitSuccess(e){
				var roomReservSub = e.control;
				alert("회의실 예약 완료");
			//	app.lookup("reservForm").redraw;
				var submission = app.lookup("roomReservSub").send();
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("roomInfo");
			dataSet_1.parseData({
				"columns": [
					{
						"name": "roomName",
						"dataType": "string"
					},
					{
						"name": "roomId",
						"dataType": "number"
					}
				],
				"rows": []
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("time");
			dataSet_2.parseData({
				"columns": [{
					"name": "time",
					"dataType": "string"
				}],
				"rows": [
					{"time": "9:00"},
					{"time": "10:00"},
					{"time": "11:00"},
					{"time": "12:00"},
					{"time": "13:00"},
					{"time": "14:00"},
					{"time": "15:00"},
					{"time": "16:00"},
					{"time": "17:00"},
					{"time": "18:00"},
					{"time": "19:00"},
					{"time": "20:00"}
				]
			});
			app.register(dataSet_2);
			var dataMap_1 = new cpr.data.DataMap("roomReservParam");
			dataMap_1.parseData({
				"columns" : [
					{"name": "roomReservDate"},
					{"name": "roomReservStartTime"},
					{"name": "roomReservEndTime"},
					{"name": "proposal"},
					{
						"name": "roomId",
						"dataType": "number"
					}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("roomReservSub");
			submission_1.action = "member/room-reserv";
			submission_1.addRequestData(dataMap_1);
			if(typeof onRoomReservSubSubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onRoomReservSubSubmitSuccess);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("roomInfoSub");
			submission_2.method = "get";
			submission_2.action = "member/room-reserv";
			submission_2.addResponseData(dataSet_1, false);
			app.register(submission_2);
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
			var group_1 = new cpr.controls.Container("reservForm");
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "0px";
			formLayout_1.rightMargin = "0px";
			formLayout_1.bottomMargin = "0px";
			formLayout_1.leftMargin = "0px";
			formLayout_1.horizontalSpacing = "0px";
			formLayout_1.verticalSpacing = "0px";
			formLayout_1.setColumns(["200px", "1fr"]);
			formLayout_1.setRows(["100px", "100px", "250px", "250px"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output();
				output_1.value = "회의실";
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var output_2 = new cpr.controls.Output();
				output_2.value = "목적";
				container.addChild(output_2, {
					"colIndex": 0,
					"rowIndex": 2
				});
				var comboBox_1 = new cpr.controls.ComboBox("roomNameCmb");
				var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("roomReservParam"));
				comboBox_1.setBindContext(dataMapContext_1);
				comboBox_1.bind("value").toDataMap(app.lookup("roomReservParam"), "roomId");
				(function(comboBox_1){
					comboBox_1.setItemSet(app.lookup("roomInfo"), {
						"label": "roomName",
						"value": "roomId"
					});
				})(comboBox_1);
				container.addChild(comboBox_1, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var inputBox_1 = new cpr.controls.InputBox("proposalIpb");
				var dataMapContext_2 = new cpr.bind.DataMapContext(app.lookup("roomReservParam"));
				inputBox_1.setBindContext(dataMapContext_2);
				inputBox_1.bind("value").toDataMap(app.lookup("roomReservParam"), "proposal");
				container.addChild(inputBox_1, {
					"colIndex": 1,
					"rowIndex": 2
				});
				var group_2 = new cpr.controls.Container();
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_2.setLayout(xYLayout_2);
				(function(container){
					var button_1 = new cpr.controls.Button();
					button_1.value = "취소";
					container.addChild(button_1, {
						"right": "650px",
						"bottom": "88px",
						"width": "100px",
						"height": "30px"
					});
					var button_2 = new cpr.controls.Button();
					button_2.value = "신청";
					if(typeof onButtonClick == "function") {
						button_2.addEventListener("click", onButtonClick);
					}
					container.addChild(button_2, {
						"bottom": "88px",
						"left": "690px",
						"width": "100px",
						"height": "30px"
					});
				})(group_2);
				container.addChild(group_2, {
					"colIndex": 0,
					"rowIndex": 3,
					"colSpan": 2,
					"rowSpan": 1
				});
				var group_3 = new cpr.controls.Container();
				var formLayout_2 = new cpr.controls.layouts.FormLayout();
				formLayout_2.scrollable = false;
				formLayout_2.topMargin = "0px";
				formLayout_2.rightMargin = "0px";
				formLayout_2.bottomMargin = "0px";
				formLayout_2.leftMargin = "0px";
				formLayout_2.horizontalSpacing = "0px";
				formLayout_2.verticalSpacing = "0px";
				formLayout_2.setColumns(["1fr", "1fr", "1fr", "1fr", "1fr"]);
				formLayout_2.setRows(["1fr"]);
				group_3.setLayout(formLayout_2);
				(function(container){
					var output_3 = new cpr.controls.Output();
					output_3.value = "종료 시간";
					container.addChild(output_3, {
						"colIndex": 3,
						"rowIndex": 0
					});
					var comboBox_2 = new cpr.controls.ComboBox("endCmd");
					var dataMapContext_3 = new cpr.bind.DataMapContext(app.lookup("roomReservParam"));
					comboBox_2.setBindContext(dataMapContext_3);
					comboBox_2.bind("value").toDataMap(app.lookup("roomReservParam"), "roomReservEndTime");
					(function(comboBox_2){
						comboBox_2.setItemSet(app.lookup("time"), {
							"label": "time",
							"value": "time"
						});
					})(comboBox_2);
					container.addChild(comboBox_2, {
						"colIndex": 4,
						"rowIndex": 0
					});
					var comboBox_3 = new cpr.controls.ComboBox("startCmd");
					var dataMapContext_4 = new cpr.bind.DataMapContext(app.lookup("roomReservParam"));
					comboBox_3.setBindContext(dataMapContext_4);
					comboBox_3.bind("value").toDataMap(app.lookup("roomReservParam"), "roomReservStartTime");
					(function(comboBox_3){
						comboBox_3.setItemSet(app.lookup("time"), {
							"label": "time",
							"value": "time"
						});
					})(comboBox_3);
					container.addChild(comboBox_3, {
						"colIndex": 2,
						"rowIndex": 0
					});
					var output_4 = new cpr.controls.Output();
					output_4.value = "시작 시간";
					container.addChild(output_4, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var dateInput_1 = new cpr.controls.DateInput("dateDti");
					var dataMapContext_5 = new cpr.bind.DataMapContext(app.lookup("roomReservParam"));
					dateInput_1.setBindContext(dataMapContext_5);
					dateInput_1.bind("value").toDataMap(app.lookup("roomReservParam"), "roomReservDate");
					container.addChild(dateInput_1, {
						"colIndex": 0,
						"rowIndex": 0
					});
				})(group_3);
				container.addChild(group_3, {
					"colIndex": 1,
					"rowIndex": 1
				});
				var output_5 = new cpr.controls.Output();
				output_5.value = "예약 날짜";
				container.addChild(output_5, {
					"colIndex": 0,
					"rowIndex": 1
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "0px",
				"right": "0px",
				"bottom": "0px",
				"left": "0px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
		}
	});
	app.title = "RoomReservForm";
	cpr.core.Platform.INSTANCE.register(app);
})();
