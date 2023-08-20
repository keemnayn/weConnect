package com.arezip.weconnect.controller.member.freeboard;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.arezip.weconnect.model.dto.FreeBoardDTO;
import com.arezip.weconnect.service.FreeBoardService;
import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/weconnect/member/boards") // submission action 도메인과 같음
@RequiredArgsConstructor
public class FreeBoardRestController {
	private final FreeBoardService freeBoardService;

	// 자유게시판 게시글 리스트 보이기
	@GetMapping
	public View freeBoardListPage(DataRequest dataRequest) {
		List<FreeBoardDTO> boardList = freeBoardService.getFreeBoardList();
		log.info("게시글 리스트{}",boardList);
		dataRequest.setResponse("boardList", boardList);// 데이터셋 이름과 같음
		return new JSONDataView();
	}
	 

//	// 자유게시판 상세 조회
//	@GetMapping("detail")
//	public View boardDetail(DataRequest dataRequest) {
//		ParameterGroup param = dataRequest.getParameterGroup("boardParam");
//		Long freeBoardId = Long.parseLong(param.getValue("freeBoardId"));
//		FreeBoardDTO freeBoardDetail = freeBoardService.getFreeBoardDetail(freeBoardId);
//		dataRequest.setResponse("freeBoardDetail", freeBoardDetail);//상세 페이지에서 받음
//		return new JSONDataView();
//	}

//	//자유게시판 새글 쓰기
//	@PostMapping
//	public View newBoardSave() {
//		return null;
//		
//	}
}
