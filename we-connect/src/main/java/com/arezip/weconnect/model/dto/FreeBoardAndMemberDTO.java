package com.arezip.weconnect.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FreeBoardAndMemberDTO {
	private long freeBoardId;
	private String freeBoardTitle;
	private String freeBoardCreate;
	private String memberName;
}
