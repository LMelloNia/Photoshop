package com.ojt.hyune.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.util.Base64Utils;

import com.ojt.hyune.domain.ImageInfo;
import com.ojt.hyune.domain.ImageUploadRequest;
import com.ojt.hyune.repository.ImageInfoRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class ImageInfoService {
    private final ImageInfoRepository imageInfoRepository;
    
    public List<ImageInfo> getImagesByUserId(String userId) {
        return imageInfoRepository.findByUserId(userId);
    }

    public String uploadImage(ImageUploadRequest request) throws IOException {
        String base64Image = request.getImage().split(",")[1];
        byte[] imageBytes = Base64Utils.decodeFromString(base64Image);

        String uuid = UUID.randomUUID().toString();
        String imageName = uuid + ".png";
        String imagePath = "upload/" + imageName;

        createDirectoryIfNotExists("upload");

        saveImageToFile(imageBytes, imagePath);

        ImageInfo imageInfo = new ImageInfo();
        imageInfo.setImageName(imageName);
        imageInfo.setUserId(request.getUserId());
        imageInfo.setVirtualName(request.getVirtualName());
        imageInfoRepository.save(imageInfo);

        return imageName;
    }

    private void saveImageToFile(byte[] imageBytes, String imagePath) throws IOException {
        try (FileOutputStream fos = new FileOutputStream(new File(imagePath))) {
            fos.write(imageBytes);
        }
    }

    private void createDirectoryIfNotExists(String directoryPath) {
        File directory = new File(directoryPath);
        if (!directory.exists()) {
            directory.mkdirs();
        }
    }
}