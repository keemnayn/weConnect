/************************************************
 * Calendar.js
 * Created at 2023. 8. 5. 오후 7:12:25.
 *
 * @author chwec
 ************************************************/

/*
 * 캘린더에서 date-click 이벤트 발생 시 호출.
 * Calendar의 날짜를 클릭 했을때 발생하는 이벤트.
 */
function onCalendarDateClick(e) {
	/** 
	 * @type cpr.controls.Calendar
	 */
	var calendar = e.control;
	
	var initValue = {
		start: e.date,
		end: e.date
	};
	
	// 신규 아이템 등록 팝업
	app.openDialog("CalendarSample/popup/CalendarItemDetail", {
		width: 500,
		height: 300
	}, function(dialog) {
		
		dialog.initValue = initValue;
		
		dialog.addEventListener("close", function(e) {
			var returnValue = dialog.returnValue;
			
			if (returnValue) {
				var start = returnValue["start"];
				var end = returnValue["end"];
				var event = returnValue["event"];
				var description = returnValue["description"];
				
				//				var vnRowCnt = app.lookup("dsAnni").getRowCount();
				//				app.lookup("dsAnni").insertRowData(vnRowCnt, true, {
				//					label: event,
				//					value: "newValue_" + event + "_" + vnRowCnt,
				//					start: start,
				//					end: end,
				//					description: description
				//				});
				calendar.redraw();
			}
		});
	});
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onProjectListSubSubmitSuccess(e) {
	//	var projectListSub = e.control;
	//	var calendar = app.lookup("calendar");
	//	var dataSet = app.lookup("projectList");
	//	var jsonData = JSON.parse(projectListSub.xhr.responseText);
	//	var projectList = jsonData.projectList[0];
	//	var projectName = jsonData.projectList[0].projectName;
	//	var projectStart = jsonData.projectList[0].projectStart;
	//	var projectEnd = jsonData.projectList[0].projectEnd;
	//	console.log(projectName);
	//	console.log(projectStart);
	//	console.log(projectEnd);
	//	
	//	for (var i = 0; i < projectList.length; i++) {
	//		let projectName = projectList[i].projectName;
	//		let projectStart = projectList[i].projectStart;
	//		let projectEnd = projectList[i].projectEnd;
	//		const dateRange = [projectStart, projectEnd];
	//		
	//		calendar.addAnniversary({
	//			date: dateRange,
	//			label: projectName
	//		});
	//	}
	var submission = app.lookup("projectListSub");
	var calendar = app.lookup("calendar");
	var dataSet = app.lookup("projectList");
	var jsonData = JSON.parse(submission.xhr.responseText);
	var projectList = jsonData.projectList;
	for (var i = 0; i < projectList.length; i++) {
		var projectName = jsonData.projectList[i].projectName;
		var projectStart = jsonData.projectList[i].projectStart;
		var projectEnd = jsonData.projectList[i].projectEnd;
		console.log(projectName);
		console.log(projectStart);
		console.log(projectEnd);
		//	calendar.addItem(new cpr.controls.CalendarItem("label", new Date(dataSet.getColumn("projectStart")), new Date(dataSet.getColumn("projectEnd"))));
		calendar.addItem(new cpr.controls.CalendarItem(projectName, new Date(projectStart), new Date(projectEnd)));
	}
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad2(e) {
	console.log("=============");
	var submission = app.lookup("projectListSub");
	submission.send();
}