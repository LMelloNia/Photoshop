package com.ojt.hyune.domain;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 기본 키
    @Column(name = "user_no")
    private Integer userNo;

    @Column(unique = true, nullable = true)
    private String userId;

    private String userEmail;
    private String userName;
    private String userPassword;
    private String userNick;

    @CreatedDate // Entity 생성시 일자 자동 저장
    private LocalDateTime userCreateDate;
}
