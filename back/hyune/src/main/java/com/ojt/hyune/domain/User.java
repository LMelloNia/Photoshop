package com.ojt.hyune.domain;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class) // Auditing 기능을 포함 - CreatedDate
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 기본 키
    @Column(name = "user_no")
    private Integer userNo;

    @Column(unique = true, nullable = true)
    private String userId;

    private String userNick;
    private String userPassword;

    @CreatedDate // Entity 생성시 일자 자동 저장
    private LocalDateTime userCreateDate;
}
