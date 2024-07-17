package com.ojt.hyune.domain;

import lombok.Data;

@Data
public class ImageUploadRequest {
    private String userId;
    private String image;
    private String virtualName;
}