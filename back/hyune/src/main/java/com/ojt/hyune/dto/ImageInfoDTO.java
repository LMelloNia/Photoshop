package com.ojt.hyune.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ImageInfoDTO {
    private Integer id;
    private String imageName;
    private String userId;
    private String virtualName;
}
