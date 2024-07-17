package com.ojt.hyune.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ojt.hyune.domain.ImageInfo;

public interface ImageInfoRepository extends JpaRepository<ImageInfo, Integer> {
    List<ImageInfo> findByUserId(String userId);
}
