package com.ojt.hyune.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ojt.hyune.domain.ImageInfo;
import com.ojt.hyune.domain.ImageUploadRequest;
import com.ojt.hyune.service.ImageInfoService;

@RestController
@RequestMapping("/api/image")
public class ImageInfoController {

    @Autowired
    private ImageInfoService imageInfoService;

    @PostMapping("/upload")
    public String uploadImage(@RequestBody ImageUploadRequest request) throws IOException {
        return imageInfoService.uploadImage(request);
    }

    @GetMapping("/user/{userId}")
    public List<ImageInfo> getImagesByUserId(@PathVariable String userId) {
        return imageInfoService.getImagesByUserId(userId);
    }
}