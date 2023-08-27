/************************************************
 * detail.js
 * Created at 2023. 8. 7. 오전 10:08:05.
 *
 * @author keemn
 ************************************************/

/*'
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("teamPostSub").send();
}

/*
 * 인풋 박스에서 mousedown 이벤트 발생 시 호출.
 * 사용자가 컨트롤 위에 포인터를 위치한 상태로 마우스 버튼을 누를 때 발생하는 이벤트.
 */
function onInsertIpbMousedown(e) {
	var insertIpb = e.control;
	app.openDialog("dialog/TeamPostCreate", {
		width: 1580,
		height: 780
	}, function(dialog) {
		dialog.addEventListener("close", function(e) {
			app.lookup("teamPostSub").send();
		});
	});
}

/*
 * 서브미션에서 receive 이벤트 발생 시 호출.
 * 서버로 부터 데이터를 모두 전송받았을 때 발생합니다.
 */
function onTeamPostSubReceive(e) {
	var teamPostSub = e.control;
	var xhr = teamPostSub.xhr;
	var jsonData = JSON.parse(xhr.responseText);
	var teamPostList = jsonData.teamPostList;
	var container = app.lookup("grp");
	container.removeAllChildren();
	console.log(teamPostList.length);
	for (var i = 0; i < teamPostList.length; i++) {
		//udc 동적 생성
		var teamPostUdc = new udc.TeamPostUdc();
		teamPostUdc.name = teamPostList[i].memberName;
		teamPostUdc.date = teamPostList[i].teamPostCreateDate;
		teamPostUdc.title = teamPostList[i].teamPostTitle;
		teamPostUdc.content = teamPostList[i].teamPostContent;
		teamPostUdc.project = teamPostList[i].projectName;
		teamPostUdc.department = teamPostList[i].departmentName;
		container.addChild(teamPostUdc, {
			width: "800px",
			height: "400px",
			autoSize: "both"
		});
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onTeamPostSubSubmitSuccess(e) {
	var teamPostSub = e.control;
	app.lookup("projectName").redraw();
}

/*
 * 그룹에서 dblclick 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 더블 클릭할 때 발생하는 이벤트.
 */
function onGrpDblclick(e) {
	var grp = e.control;
	//팝업 열기
	app.openDialog("dialog/TeamPostUpdateDelete", {
		width: 1580,
		height: 780
	}, function(dialog) {
		// 닫기 하면 send 후 reload
		dialog.addEventListener("close", function(e) {
			app.lookup("teamPostSub").send();
		});
	});
}