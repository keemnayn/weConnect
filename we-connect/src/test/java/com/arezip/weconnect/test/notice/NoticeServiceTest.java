package com.arezip.weconnect.test.notice;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arezip.weconnect.model.vo.MemberVO;
import com.arezip.weconnect.model.vo.NoticeVO;
import com.arezip.weconnect.service.NoticeService;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class NoticeServiceTest {
	@Autowired
	NoticeService noticeService;

//	공지사항 전체 리스트 service
	@Test
	void findAllNoticesTest() {
		List<NoticeVO> list = noticeService.findAllNotices();
		list.forEach(notice -> log.info(notice.toString()));
	}

//	공지사항 추가 service
	@Test
	void addNoticeTest() {
		NoticeVO noticeVO = new NoticeVO();
		noticeVO.setNoticeTitle("서비스 테스트 제목");
		noticeVO.setNoticeContent("서비스 테스트 내용");
		noticeVO.setNoticeCategory("공지");
		MemberVO memberVO = new MemberVO();
		memberVO.setMemberId(1);
		noticeVO.setMemberVO(memberVO);
		int result = noticeService.addNotice(noticeVO);
		assertNotEquals(0, result);
	}

//	공지사항 수정 service
	@Test
	void updateNoticeTest() {
		NoticeVO noticeVO = new NoticeVO();
		noticeVO.setNoticeId(17);
		noticeVO.setNoticeTitle("서비스 테스트 제목 수정");
		noticeVO.setNoticeContent("서비스 테스트 내용 수정");
		noticeVO.setNoticeCategory("공지");
		int result = noticeService.updateNotice(noticeVO);
		assertNotEquals(0, result);
	}

//	공지사항 삭제 service
	@Test
	void deleteNoticeTest() {
		long noticeId = 18;
		int result = noticeService.deleteNotice(noticeId);
		assertNotEquals(0, result);
	}

// 	공지사항 검색 service
	@Test
	void searchNoticesTest() {
		Map<String, String> searchParams = new HashMap<>();
		searchParams.put("searchType", "category");
		searchParams.put("searchText", "점검");
		List<NoticeVO> list = noticeService.searchNotice(searchParams);
// 		null 여부 확인
		assertNotNull(list);
// 		리스트가 비어있지 않은지 검증
		assertFalse(list.isEmpty());
//		결과 출력
		list.forEach(notice -> log.info(notice.toString()));
	}
}