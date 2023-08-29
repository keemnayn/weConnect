/************************************************
 * TeamPostCommentUdc.js
 * Created at 2023. 8. 28. 오후 9:33:43.
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
	app.lookup("content").text = app.getAppProperty("content");
	app.lookup("deleteBtn").visible = app.getAppProperty("deleteBtn");
}

/*
 * "삭제" 버튼(deleteBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onDeleteBtnClick(e) {
	var deleteBtn = e.control;
	var event = new cpr.events.CAppEvent("deleteClick");
	app.dispatchEvent(event);
}