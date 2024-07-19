package com.ojt.hyune.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardDTO {
    private Integer id;
    private String title;
    private String content;
    private String userNick;
    private String userId;
    private String imageUrl;
    private LocalDateTime createdTime;
}