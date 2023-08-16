package com.arezip.weconnect.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FreeBoardVO {
	private long freeBoardId;
	private String freeBoardTitle;
	private String freeBoardContent;
	private String freeBoardCreate;
	private long freeBoardViews;
	private MemberVO memberVO;
}
