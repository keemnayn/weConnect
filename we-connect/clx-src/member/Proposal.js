/************************************************
 * Proposal.js
 * Created at 2023. 8. 21. 오전 03:25:21.
 *
 * @author keemnayn
 ************************************************/

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	app.lookup("proposalListSub").send();
}

/*
 * "새글" 버튼(createBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCreateBtnClick(e) {
	var createBtn = e.control;
	var grid = app.lookup("proposalGrd");
	app.openDialog("dialog/ProposalCreate", {
		width: 1580,
		height: 780
	}, function(dialog) {
		dialog.addEventListener("close", function(e) {
			app.lookup("proposalListSub").send();
		});
	});
}

/*
 * 그리드에서 row-dblclick 이벤트 발생 시 호출.
 * detail이 row를 더블클릭 한 경우 발생하는 이벤트.
 */
function onProposalGrdRowDblclick(e) {
	var proposalGrd = e.control;
	var grid = app.lookup("proposalGrd");
	var selectedRowIndices = grid.getSelectedRowIndices();
	if (selectedRowIndices.length == 1) {
		var proposalId = grid.dataSet.getValue(selectedRowIndices[0], "proposalId");
		var proposalTitle = grid.dataSet.getValue(selectedRowIndices[0], "proposalTitle");
		var proposalContent = grid.dataSet.getValue(selectedRowIndices[0], "proposalContent");
		var proposalStatus = grid.dataSet.getValue(selectedRowIndices[0], "proposalStatus");
		var value = {
			"proposalId": proposalId,
			"proposalTitle": proposalTitle,
			"proposalContent": proposalContent,
			"proposalStatus": proposalStatus
		}
		app.openDialog("dialog/ProposalUpdateDelete", {
			width: 1580,
			height: 780
		}, function(dialog) {
			dialog.ready(function(dialogApp) {
				dialogApp.initValue = value;
			});
			// 닫기 하면 send 후 reload
			dialog.addEventListener("close", function(e) {
				app.lookup("proposalListSub").send();
			});
		});
	}
}

/*
 * 서치 인풋에서 search 이벤트 발생 시 호출.
 * Searchinput의 enter키 또는 검색버튼을 클릭하여 인풋의 값이 Search될때 발생하는 이벤트
 */
function onSearchIpbSearch(e) {
	var searchIpb = e.control;
	var submission = app.lookup("searchProposalSub");
	submission.send();
}